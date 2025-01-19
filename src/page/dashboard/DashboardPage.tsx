import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '@/components/dashboard/Sidebar';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DashboardPage = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);
  const location = useLocation();

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location, isMobile]);

  const toggleMobileMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header for mobile */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b z-40">
        <div className="flex items-center h-full px-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="border-2 hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="ml-4 text-xl font-bold bg-gradient-to-r from-vento-primary to-vento-secondary bg-clip-text text-transparent">
            Vento
          </span>
        </div>
      </header>

      {/* Backdrop with fade animation */}
      {sidebarOpen && isMobile && (
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 lg:hidden z-30",
            "transition-opacity duration-300 ease-in-out",
            sidebarOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed}
        isMobile={isMobile}
        isOpen={sidebarOpen}
        onNavigate={() => isMobile && setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className={cn(
        "min-h-screen transition-all duration-300 ease-in-out",
        // Ajuste de padding izquierdo para desktop
        collapsed ? "lg:pl-16" : "lg:pl-64",
        // Padding superior considerando el header móvil
        "pt-24 lg:pt-8", // Aumentado el padding top en móvil
        // Padding general
        "px-4 sm:px-6 lg:px-8",
        // Padding inferior
        "pb-8"
      )}>
        <div className="max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;