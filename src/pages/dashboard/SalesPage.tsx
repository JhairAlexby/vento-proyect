import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SaleItem {
  product: string;
  productName: string; 
  quantity: number;
  price: number;
  subtotal: number; 
}


const mockSales: SaleItem[] = [
  {
    product: '1',
    productName: 'Hamburguesa Clásica',
    quantity: 5,
    price: 8.99,
    subtotal: 44.95
  },
  {
    product: '2',
    productName: 'Hot Dog Clásico',
    quantity: 3,
    price: 5.99,
    subtotal: 17.97
  },
];

const SalesPage = () => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [sales, setSales] = React.useState<SaleItem[]>(mockSales);

  const dailyTotal = sales.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Ventas</h1>
          <p className="text-gray-600">Resumen de ventas del día</p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[240px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(date, "PPP")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => date && setDate(date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Ventas del {format(date, "PPP")}</span>
            <span className="text-2xl font-bold text-primary">
              ${dailyTotal.toFixed(2)}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead className="text-right">Cantidad</TableHead>
                <TableHead className="text-right">Precio Unit.</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-gray-500">
                    No hay ventas registradas para este día
                  </TableCell>
                </TableRow>
              ) : (
                sales.map((item) => (
                  <TableRow key={item.product}>
                    <TableCell className="font-medium">
                      {item.productName}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      ${item.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      ${item.subtotal.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))
              )}
              {sales.length > 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-bold">
                    Total del Día
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    ${dailyTotal.toFixed(2)}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Ganancias Personales del dia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600">
              $1,350.00
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>  
            <CardTitle>Parte destinada a la reinversion Reinversión del dia </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-600">
              $900.00
            </p>
          </CardContent>  
        </Card>
      </div>
      
    </div>
  );
};

export default SalesPage;