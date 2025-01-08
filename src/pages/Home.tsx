import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const Home = () => {
  return (
        <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        </SidebarProvider>
    

  )
}
