import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Utensils, Clock, ChartBar, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-vento-primary to-vento-secondary bg-clip-text text-transparent">
              Vento
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-vento-text-light hover:text-vento-text transition-colors">
              Características
            </a>
            <Button variant="ghost">Iniciar Sesión</Button>
            <Button className="bg-gradient-to-r from-vento-primary to-vento-secondary text-white hover:opacity-90">
              Registrarse
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-vento-text-light hover:text-vento-text transition-colors">
                Características
              </a>
              <Button variant="ghost" className="justify-start">Iniciar Sesión</Button>
              <Button className="bg-gradient-to-r from-vento-primary to-vento-secondary text-white hover:opacity-90">
                Registrarse
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => (
  <div className="relative pt-16">
    <div className="absolute inset-0 bg-gradient-to-br from-vento-primary-light to-vento-secondary-light" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-20 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-vento-primary to-vento-secondary bg-clip-text text-transparent">
            Impulsa tu Restaurante al Siguiente Nivel
          </h1>
          <p className="text-xl md:text-2xl text-vento-text-light mb-8">
            Sistema de punto de venta intuitivo y poderoso, diseñado para 
            hacer crecer tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-vento-primary to-vento-secondary text-white hover:opacity-90"
            >
              Empezar Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-gradient-to-r hover:from-vento-primary hover:to-vento-secondary hover:text-white transition-all duration-300"
            >
              Ver Demo
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-16 relative">
          <div className="aspect-[16/9] max-w-5xl mx-auto">
            <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="/api/placeholder/1200/675" 
                alt="Vento Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-vento-text">
          Todo lo que Necesitas
        </h2>
        <p className="text-xl text-vento-text-light">
          Herramientas simples pero poderosas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <ShoppingCart className="h-6 w-6" />,
            title: "Ventas Rápidas",
            description: "Procesa órdenes en segundos con una interfaz intuitiva"
          },
          {
            icon: <Utensils className="h-6 w-6" />,
            title: "Menú Digital",
            description: "Actualiza tu menú al instante desde cualquier dispositivo"
          },
          {
            icon: <Clock className="h-6 w-6" />,
            title: "Tiempo Real",
            description: "Monitorea tu negocio en tiempo real desde donde estés"
          },
          {
            icon: <ChartBar className="h-6 w-6" />,
            title: "Analytics",
            description: "Datos y métricas que impulsan tu crecimiento"
          }
        ].map((feature, index) => (
          <Card 
            key={index} 
            className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-vento-primary to-vento-secondary flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-xl mb-2 text-vento-text">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-vento-text-light">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

const GetStarted = () => (
  <div className="relative py-20 overflow-hidden bg-gradient-to-r from-vento-primary to-vento-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Comienza a Usar Vento Hoy
      </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Únete a los restaurantes que ya están optimizando su negocio con Vento
      </p>
      <Button 
        size="lg" 
        className="bg-white text-vento-primary hover:bg-white/90"
      >
        Crear Cuenta Gratis
      </Button>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <GetStarted />
    </div>
  );
};

export default LandingPage;