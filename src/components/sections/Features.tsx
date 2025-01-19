import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Utensils, Clock, ChartBar } from "lucide-react";

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

export default Features;