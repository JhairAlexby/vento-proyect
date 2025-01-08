import React from "react"
import { FormLogin } from "@/components/login/formLogin"

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
        <FormLogin onSubmit={handleLogin} />
      </div>
    </main>
  )
}