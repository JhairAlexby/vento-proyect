import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Wallet, PiggyBank } from 'lucide-react';
import { cn } from "@/lib/utils";

// Datos de ejemplo (estos vendrán del backend)
const mockData = {
  ventasDiarias: 4800,
  ventasSemanales: 24800,
  ventasMensuales: 98500,
  ventasPorDia: [
    { day: 'Lunes', ventas: 2400 },
    { day: 'Martes', ventas: 1398 },
    { day: 'Miércoles', ventas: 3800 },
    { day: 'Jueves', ventas: 3908 },
    { day: 'Viernes', ventas: 4800 },
    { day: 'Sábado', ventas: 3800 },
    { day: 'Domingo', ventas: 4300 }
  ],
  reinversion: 14880,
  gananciaPersonal: 9920,
  tendencias: {
    diaria: { valor: "12.5%", positiva: true },
    semanal: { valor: "8.2%", positiva: true },
    mensual: { valor: "15.3%", positiva: true }
  }
};

const StatisticsPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Estadísticas</h1>
        <p className="text-gray-600">Resumen de ventas y ganancias</p>
      </div>

      {/* Resumen de Ventas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Ventas del Día",
            value: `$${mockData.ventasDiarias.toLocaleString()}`,
            icon: <DollarSign className="text-emerald-600" />,
            trend: mockData.tendencias.diaria
          },
          {
            title: "Ventas de la Semana",
            value: `$${mockData.ventasSemanales.toLocaleString()}`,
            icon: <TrendingUp className="text-blue-600" />,
            trend: mockData.tendencias.semanal
          },
          {
            title: "Ventas del Mes",
            value: `$${mockData.ventasMensuales.toLocaleString()}`,
            icon: <Wallet className="text-purple-600" />,
            trend: mockData.tendencias.mensual
          }
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={cn(
                "text-xs mt-1 flex items-center",
                stat.trend.positiva ? "text-emerald-600" : "text-red-600"
              )}>
                {stat.trend.positiva ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                {stat.trend.valor} vs. periodo anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gráfico de Ventas Semanales */}
      <Card>
        <CardHeader>
          <CardTitle>Ventas de la Semana</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.ventasPorDia}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="ventas" 
                  fill="#7C3AED" 
                  name="Ventas ($)" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Resumen de Ganancias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Reinversión Semanal
            </CardTitle>
            <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
              <PiggyBank className="text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${mockData.reinversion.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              60% de las ventas semanales
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Ganancia Personal
            </CardTitle>
            <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Wallet className="text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${mockData.gananciaPersonal.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              40% de las ventas semanales
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatisticsPage;