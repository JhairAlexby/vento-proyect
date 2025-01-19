import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, PiggyBank } from 'lucide-react';
import type { SalesData } from './types';

interface ProfitSummaryProps {
  data: Pick<SalesData, 'reinversion' | 'gananciaPersonal'>;
}

const ProfitSummary = ({ data }: ProfitSummaryProps) => {
  return (
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
            ${data.reinversion.toLocaleString()}
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
            ${data.gananciaPersonal.toLocaleString()}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            40% de las ventas semanales
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfitSummary;