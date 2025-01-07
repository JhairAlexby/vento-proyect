import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function Login() {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Iniciando sesión...")
  }

  return (
    <main className="flex h-screen bg-slate-50 overflow-hidden">
      <div className="hidden lg:block w-1/2 h-full overflow-hidden">
        <img
          src="https://picsum.photos/800/1200"
          alt="Imagen de login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-1 items-center justify-center p-6 overflow-auto">
        <Card className="w-full max-w-md shadow-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
            <CardDescription className="text-gray-500">
              Ingresa tus credenciales para acceder a tu cuenta
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleLogin}>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu-correo@ejemplo.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
              <div className="flex justify-between text-sm text-gray-600">
                <a href="#" className="hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
                <a href="#" className="hover:underline">
                  ¿No tienes cuenta? Regístrate
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
}
