import { FormRegister } from "@/components/register/FormRegister"
import React from "react"

export default function Register() {
  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Registrando usuario...")
  }

  return (
    <main className="flex h-screen bg-slate-50 overflow-hidden">
      <div className="hidden lg:block w-1/2 h-full overflow-hidden">
        <img
          src="https://picsum.photos/800/1200"
          alt="Imagen de registro"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-1 items-center justify-center p-6 overflow-auto">
        <FormRegister onSubmit={handleRegister} />
      </div>
    </main>
  )
}