import { Button } from "@/components/ui/button";


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
  
    export default GetStarted;