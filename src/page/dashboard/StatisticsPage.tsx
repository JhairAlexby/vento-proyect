import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, DollarSign, Users } from 'lucide-react';

const StatisticsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Bienvenido de nuevo</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'Ventas Totales',
            value: '$12,345',
            icon: <DollarSign className="text-emerald-600" />,
            trend: '+12.5%'
          },
          {
            title: 'Pedidos Hoy',
            value: '48',
            icon: <TrendingUp className="text-blue-600" />,
            trend: '+8.2%'
          },
          {
            title: 'Clientes',
            value: '2,420',
            icon: <Users className="text-purple-600" />,
            trend: '+3.1%'
          },
          {
            title: 'Ticket Promedio',
            value: '$25.50',
            icon: <BarChart3 className="text-orange-600" />,
            trend: '+5.4%'
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
              <p className="text-xs text-emerald-600 mt-1">
                {stat.trend} vs. mes anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatisticsPage;