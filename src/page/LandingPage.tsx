import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ShoppingCart, Utensils, Clock, ChartBar } from "lucide-react";

const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Gestiona tu Restaurante de Manera Simple
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8">
        Sistema de punto de venta diseñado específicamente para pequeños restaurantes
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Prueba Gratis
        </Button>
        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
          Ver Demo
        </Button>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Características Principales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
            title: "Punto de Venta",
            description: "Gestión simple de órdenes y pagos"
          },
          {
            icon: <Utensils className="h-8 w-8 text-blue-600" />,
            title: "Menú Digital",
            description: "Actualiza tu menú fácilmente"
          },
          {
            icon: <Clock className="h-8 w-8 text-blue-600" />,
            title: "Reservaciones",
            description: "Sistema de reservas en línea"
          },
          {
            icon: <ChartBar className="h-8 w-8 text-blue-600" />,
            title: "Reportes",
            description: "Análisis detallado de ventas"
          }
        ].map((feature, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

const Pricing = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Planes y Precios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Básico",
            price: "$29",
            description: "Perfecto para comenzar",
            features: ["1 Terminal", "Menú Digital", "Soporte Básico"]
          },
          {
            title: "Profesional",
            price: "$59",
            description: "Para restaurantes en crecimiento",
            features: ["3 Terminales", "Reservaciones", "Soporte 24/7"]
          },
          {
            title: "Premium",
            price: "$99",
            description: "Solución completa",
            features: ["Terminales Ilimitadas", "Análisis Avanzado", "Soporte Prioritario"]
          }
        ].map((plan, index) => (
          <Card key={index} className={index === 1 ? "border-blue-600 border-2" : ""}>
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">{plan.price}</span>
                /mes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                Comenzar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        ¿Tienes alguna pregunta?
      </h2>
      <Card>
        <CardHeader>
          <CardTitle>Contáctanos</CardTitle>
          <CardDescription>
            Estamos aquí para ayudarte con cualquier duda que tengas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Mensaje</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md"
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Enviar Mensaje</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </div>
  );
};

export default LandingPage;