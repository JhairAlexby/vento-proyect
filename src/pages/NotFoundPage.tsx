import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-vento-primary-light to-vento-secondary-light flex items-center justify-center px-6">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-vento-primary to-vento-secondary bg-clip-text text-transparent">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Página no encontrada
          </h2>
          <p className="text-gray-600">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Volver Atrás
          </Button>
          <Button 
            className="flex items-center gap-2 bg-gradient-to-r from-vento-primary to-vento-secondary text-white"
            onClick={() => navigate('/')}
          >
            <Home className="h-4 w-4" />
            Ir al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;