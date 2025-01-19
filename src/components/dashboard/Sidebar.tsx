import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Menu as MenuIcon, 
  BarChart3, 
  DollarSign,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobile: boolean;
  onNavigate?: () => void;
}

const Sidebar = ({ collapsed, setCollapsed, isMobile, onNavigate }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/dashboard'
    },
    {
      title: 'Nuevo Pedido',
      icon: <PlusCircle size={20} />,
      path: '/dashboard/orders'
    },
    {
      title: 'Menú',
      icon: <MenuIcon size={20} />,
      path: '/dashboard/menu'
    },
    {
      title: 'Ventas',
      icon: <DollarSign size={20} />,
      path: '/dashboard/sales'
    },
    {
      title: 'Estadísticas',
      icon: <BarChart3 size={20} />,
      path: '/dashboard/statistics'
    }
  ];

  return (
    <aside className={cn(
      "h-screen fixed left-0 top-0 z-40 bg-white border-r transition-all duration-300",
      collapsed ? "w-16" : "w-64",
      "lg:fixed lg:block",
      isMobile ? "mt-16" : "mt-0"
    )}>
      {/* Logo section - solo mostrar en desktop */}
      {!isMobile && (
        <div className="h-16 flex items-center justify-between px-4 border-b">
          {!collapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-vento-primary to-vento-secondary bg-clip-text text-transparent">
              Vento
            </span>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>
      )}

      {/* Navigation */}
      <nav className="p-2 space-y-1">
        {menuItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
              "hover:bg-gray-100",
              location.pathname === item.path ? "bg-gray-100 text-vento-primary" : "text-gray-600",
              collapsed && "justify-center"
            )}
          >
            {item.icon}
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout button */}
      <div className="absolute bottom-4 w-full px-2">
        <Button 
          variant="ghost" 
          className={cn(
            "w-full text-gray-600 hover:text-gray-900",
            collapsed ? "justify-center px-0" : "justify-start"
          )}
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Cerrar Sesión</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;