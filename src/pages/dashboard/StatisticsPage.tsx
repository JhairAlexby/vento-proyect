import React from 'react';
import SalesOverview from '@/components/statistics/SalesOverview';
import WeeklySalesChart from '@/components/statistics/WeeklySalesChart';
import ProfitSummary from '@/components/statistics/ProfitSummary';
import type { SalesData } from '@/types/statistics';

const mockData: SalesData = {
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
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Estadísticas</h1>
        <p className="text-gray-600">Resumen de ventas y ganancias</p>
      </div>

      <SalesOverview data={mockData} />
      <WeeklySalesChart data={mockData.ventasPorDia} />
      <ProfitSummary data={mockData} />
    </div>
  );
};

export default StatisticsPage;