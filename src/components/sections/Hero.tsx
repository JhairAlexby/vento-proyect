import { Button } from "@/components/ui/button";


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

export default Hero;