import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { authApi } from '@/services/api/authApi';
import { LoginCredentials } from '@/types/auth';
import { useAuth } from '@/contexts/AuthContext';

export const LoginPage = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [credentials, setCredentials] = React.useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = React.useState(false);

  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await authApi.login(credentials);
      setUser(response.data.user);
      navigate(from, { replace: true });
    } catch (error) {
      setError((error as any).response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-vento-primary-light to-vento-secondary-light px-4">
      <div className="absolute top-4 left-4">
        <Button 
          variant="ghost"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-vento-primary hover:text-vento-primary-dark"
        >
          <ArrowLeft size={20} />
          Volver
        </Button>
      </div>

      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-vento-primary mb-6">
          Iniciar Sesión
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={credentials.email}
                onChange={handleInputChange}
                required
                placeholder="correo@ejemplo.com"
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
                placeholder="********"
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-vento-primary focus:ring-vento-primary border-gray-300 rounded"
                />
                <Label htmlFor="remember-me" className="ml-2">
                  Recordarme
                </Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-vento-primary hover:text-vento-primary-dark">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-vento-primary text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="text-vento-primary hover:text-vento-primary-dark">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;