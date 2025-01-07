import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative flex flex-col items-center justify-center pt-16 pb-10 bg-gradient-to-b from-slate-50 to-white">
        <h1 className="text-4xl font-bold text-center mb-4">
          Bienvenido a tu Punto de Venta Personal
        </h1>
        <p className="max-w-2xl text-center text-gray-600 mb-8">
          Simplifica la gestión de tus ventas, inventario y clientes con nuestra solución moderna y de fácil uso.
        </p>
        <Button size="lg">Comienza Ahora</Button>
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
                Registra cada transacción de forma simple y segura, mantén tus reportes de ingresos siempre actualizados.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Inventario</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Controla tus existencias en tiempo real y recibe alertas cuando un producto esté por agotarse.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Almacena los datos de tus clientes y construye relaciones más fuertes a largo plazo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10 mx-auto max-w-4xl" />

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold text-center">
          Gestiona tu negocio con la mejor tecnología
        </h2>
        <p className="text-gray-600 max-w-xl text-center">
          Nuestra solución de punto de venta personal te ofrece control total 
          y seguridad para tu negocio. ¡Haz crecer tus ventas y maneja todo en un mismo lugar!
        </p>
        <Button size="lg" variant="default">Comenzar Gratis</Button>
      </section>
    </main>
  )
}
