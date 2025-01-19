import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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

export default Navbar;