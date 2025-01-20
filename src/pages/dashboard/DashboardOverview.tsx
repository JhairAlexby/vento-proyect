import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Book, BarChart3, DollarSign } from "lucide-react";
import { Link } from 'react-router-dom';

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">¡Bienvenido a Vento!</h1>
        <p className="text-gray-600">¿Qué te gustaría hacer hoy?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/dashboard/orders">
          <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-vento-primary">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-r from-vento-primary to-vento-secondary rounded-full">
                  <PlusCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Nuevo Pedido</h3>
                  <p className="text-sm text-gray-500">Crear una nueva orden</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/menu">
          <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-vento-primary">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-r from-vento-primary to-vento-secondary rounded-full">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Gestionar Menú</h3>
                  <p className="text-sm text-gray-500">Editar productos y precios</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/sales">
          <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-vento-primary">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-r from-vento-primary to-vento-secondary rounded-full">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Ver Ventas</h3>
                  <p className="text-sm text-gray-500">Consultar ventas diarias</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/statistics">
          <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-vento-primary">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-r from-vento-primary to-vento-secondary rounded-full">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Estadísticas</h3>
                  <p className="text-sm text-gray-500">Ver métricas detalladas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card className="bg-gradient-to-r from-vento-primary to-vento-secondary text-white">
        <CardContent className="py-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">Tu negocio, más inteligente</h3>
            <p className="text-white/90">
              Gestiona tu restaurante de manera eficiente con Vento. Estamos aquí para ayudarte a crecer.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;