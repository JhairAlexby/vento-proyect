import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card } from "@/components/ui/card"
import { CircleDollarSign, TrendingUp, PiggyBank, Wallet } from "lucide-react"

export const Home = () => {
  const stats = [
    {
      title: "Ingresos Totales Semana",
      value: "$15,842",
      icon: CircleDollarSign,
      trend: "+12.5%",
      description: "vs. semana anterior"
    },
    {
      title: "Ganancia Personal",
      value: "$4,230",
      icon: Wallet,
      trend: "+8.2%",
      description: "después de gastos"
    },
    {
      title: "Presupuesto Reinversión",
      value: "$3,500",
      icon: PiggyBank,
      trend: "+5.1%",
      description: "capital disponible"
    },
    {
      title: "Rendimiento Total",
      value: "$7,730",
      icon: TrendingUp,
      trend: "+10.3%",
      description: "ganancia neta"
    }
  ]

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 p-8 overflow-auto">
          <SidebarTrigger />
          
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Bienvenido de vuelta 👋</h1>
              <p className="text-muted-foreground mt-2">
                Aquí tienes un resumen de tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.title} className="p-6">
                  <div className="flex items-center justify-between">
                    <stat.icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-green-500">{stat.trend}</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}