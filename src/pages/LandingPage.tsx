import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="w-full bg-white border-b border-gray-200 py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            Ventoo
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="hover:bg-gray-100">
              Iniciar Sesión
            </Button>
            <Button>
              Registrarse
            </Button>
          </div>
        </nav>
      </header>

     
      <section className="relative flex flex-col items-center justify-center pt-16 pb-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenido a tu Punto de Venta Personal
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Simplifica la administración de tu negocio con Ventoo. Gestiona tus ventas, tu menú de productos e historial de transacciones diarias o mensuales de manera rápida y segura.
          </p>
          <Button size="lg" variant="default">
            Comienza Ahora
          </Button>
        </div>
        <div className="mt-10 w-full flex justify-center">
          <img
            src="https://picsum.photos/800/400"
            alt="Ejemplo Hero"
            className="rounded-lg shadow-md max-w-2xl w-full"
          />
        </div>
      </section>

      <Separator className="my-10 mx-auto max-w-4xl" />

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">¿Qué Ofrecemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Gestión de Ventas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Registra cada transacción de forma fácil y confiable, y mantén tus reportes de ingresos siempre actualizados. Optimiza tu proceso de facturación y toma decisiones informadas.
              </p>
              <img
                src="https://picsum.photos/200/120"
                alt="Gestión de Ventas"
                className="mt-4 rounded-md"
              />
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Menú</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Administra tu catálogo de productos de manera dinámica: actualiza precios, agrega nuevos artículos y organiza tu oferta para adaptarla a cualquier ocasión.
              </p>
              <img
                src="https://picsum.photos/200/120"
                alt="Menú"
                className="mt-4 rounded-md"
              />
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Ayuda en tus Cuentas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Mantén un control claro de tus ingresos y egresos con Ventoo. Visualiza tus ganancias, planifica tus inversiones y ahorra de forma organizada para que tu negocio siga creciendo.
              </p>
              <img
                src="https://picsum.photos/200/120"
                alt="Ayuda en tus Cuentas"
                className="mt-4 rounded-md"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10 mx-auto max-w-4xl" />

      <section className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold text-center">
          Maneja todo en un solo lugar
        </h2>
        <p className="text-gray-600 max-w-xl text-center">
          Centraliza la administración de tu negocio: desde ventas hasta el control de tus productos y finanzas. Así podrás simplificar tus procesos, ahorrar tiempo y enfocarte en lo que realmente importa.
        </p>
        <img
          src="https://picsum.photos/700/300"
          alt="Gestión total"
          className="rounded-md shadow-md"
        />
      </section>

      <Separator className="my-10 mx-auto max-w-4xl" />

      <section className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold text-center">
          Gestiona tu negocio con la mejor tecnología
        </h2>
        <p className="text-gray-600 max-w-xl text-center">
          Ventoo te ofrece control total y seguridad para tu negocio. ¡Haz crecer tus ventas y gestiona todo en un mismo lugar de forma simple y eficiente!
        </p>
        
      </section>
    </main>
  )
}
