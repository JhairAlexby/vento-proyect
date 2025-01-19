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
import type { SalesData } from '../../types/statistics';

interface WeeklySalesChartProps {
  data: SalesData['ventasPorDia'];
}

const WeeklySalesChart = ({ data }: WeeklySalesChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas de la Semana</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
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
  );
};

export default WeeklySalesChart;