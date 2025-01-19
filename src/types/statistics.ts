export interface SalesTrend {
    valor: string;
    positiva: boolean;
  }
  
  export interface SalesData {
    ventasDiarias: number;
    ventasSemanales: number;
    ventasMensuales: number;
    ventasPorDia: {
      day: string;
      ventas: number;
    }[];
    reinversion: number;
    gananciaPersonal: number;
    tendencias: {
      diaria: SalesTrend;
      semanal: SalesTrend;
      mensual: SalesTrend;
    };
  }