import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface FormLoginProps {
  onSubmit: (event: React.FormEvent) => void;
}

export function FormLogin({ onSubmit }: FormLoginProps) {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
        <CardDescription className="text-gray-500">
          Ingresa tus credenciales para acceder a tu cuenta
        </CardDescription>
      </CardHeader>

      <form onSubmit={onSubmit}>
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
            <a
              onClick={() => navigate("/register")}
              className="hover:underline"
            >
              ¿No tienes cuenta? Regístrate
            </a>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
