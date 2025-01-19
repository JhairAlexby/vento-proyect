import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';
import { cn } from "@/lib/utils";
import type { SalesData, SalesTrend } from './types';

interface SalesOverviewProps {
  data: Pick<SalesData, 'ventasDiarias' | 'ventasSemanales' | 'ventasMensuales' | 'tendencias'>;
}

const SalesOverview = ({ data }: SalesOverviewProps) => {
  const salesMetrics = [
    {
      title: "Ventas del Día",
      value: data.ventasDiarias,
      icon: <DollarSign className="text-emerald-600" />,
      trend: data.tendencias.diaria
    },
    {
      title: "Ventas de la Semana",
      value: data.ventasSemanales,
      icon: <TrendingUp className="text-blue-600" />,
      trend: data.tendencias.semanal
    },
    {
      title: "Ventas del Mes",
      value: data.ventasMensuales,
      icon: <Wallet className="text-purple-600" />,
      trend: data.tendencias.mensual
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {salesMetrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              {metric.title}
            </CardTitle>
            <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
              {metric.icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${metric.value.toLocaleString()}
            </div>
            <p className={cn(
              "text-xs mt-1 flex items-center",
              metric.trend.positiva ? "text-emerald-600" : "text-red-600"
            )}>
              {metric.trend.positiva ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              {metric.trend.valor} vs. periodo anterior
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SalesOverview;