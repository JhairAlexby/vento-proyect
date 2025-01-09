import {
  Home,
  Package,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ShoppingBag
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"

const navigationItems = [
  {
    group: "Menu Principal",
    items: [
      {
        title: "Dashboard",
        icon: Home,
        url: "/home"
      },
      {
        title: "Menu",
        icon: Package,
        url: "/menu"
      },
      {
        title: "Agregar Ventas",
        icon: ShoppingBag,
        url: "/add-sale"
      },
    ]
  },
  {
    group: "Administración",
    items: [
      {
        title: "Reportes de Ventas",
        icon: BarChart3,
        url: "/reports"
      },
      {
        title: "Ajustes",
        icon: Settings,
        url: "/settings"
      },
    ]
  }
]

export function AppSidebar() {
    const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/landingPage")
  }

  return (
    <Sidebar className="border-r h-screen">
      <SidebarContent className="flex flex-col h-full py-4">
        <div className="px-6 py-4 border-b">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">Usuario Demo</h3>
              <p className="text-sm text-muted-foreground">usuario@demo.com</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-2 space-y-4">
          {navigationItems.map((navGroup, index) => (
            <SidebarGroup key={index}>
              <SidebarGroupLabel className="px-4 text-sm font-medium text-muted-foreground">
                {navGroup.group}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navGroup.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <a 
                        href={item.url} 
                        className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>

        <div className="px-4 mt-auto border-t pt-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start" 
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar Sesión
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}