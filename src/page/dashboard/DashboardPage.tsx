// pages/dashboard/DashboardPage.tsx
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
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b z-40 flex items-center px-4">
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

      {/* Backdrop for mobile */}
      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "lg:block",
        sidebarOpen ? "block" : "hidden"
      )}>
        <Sidebar 
          collapsed={collapsed} 
          setCollapsed={setCollapsed}
          isMobile={isMobile}
          onNavigate={() => isMobile && setSidebarOpen(false)}
        />
      </div>

      {/* Main content */}
      <main className={cn(
        "transition-all duration-300",
        collapsed ? "lg:pl-16" : "lg:pl-64",
        "pt-20 lg:pt-4",
        "p-4 sm:p-6 lg:p-8"
      )}>
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;