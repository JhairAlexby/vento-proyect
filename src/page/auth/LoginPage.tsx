import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from 'lucide-react';

// LoginPage.tsx
export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-vento-primary-light to-vento-secondary-light px-4">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" className="flex items-center gap-2" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Button>
      </div>
      
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-6">
            <span className="text-2xl font-bold bg-gradient-to-r from-vento-primary to-vento-secondary bg-clip-text text-transparent">
              Vento
            </span>
          </div>
          <CardTitle className="text-2xl text-center">Bienvenido de nuevo</CardTitle>
          <CardDescription className="text-center">
            Ingresa tus credenciales para acceder
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center justify-end">
            <Button variant="link" className="text-sm text-vento-primary">
              ¿Olvidaste tu contraseña?
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-gradient-to-r from-vento-primary to-vento-secondary text-white hover:opacity-90">
            Iniciar Sesión
          </Button>
          <div className="text-sm text-center text-gray-500">
            ¿No tienes una cuenta?{' '}
            <Button variant="link" className="text-vento-primary p-0">
              Regístrate
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};