import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MenuItem, MenuItemInput } from '@/types/menu';
import { cn } from "@/lib/utils";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: MenuItem;
  onSave: (data: MenuItemInput) => Promise<void>;
  isLoading?: boolean;
}

const initialFormData: MenuItemInput = {
  name: '',
  price: 0,
  description: ''
};

const ProductDialog = ({ 
  open, 
  onOpenChange, 
  initialData, 
  onSave,
  isLoading = false 
}: ProductDialogProps) => {
  const [formData, setFormData] = React.useState<MenuItemInput>(initialFormData);
  const [validationErrors, setValidationErrors] = React.useState<Partial<Record<keyof MenuItemInput, string>>>({});

  React.useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        price: initialData.price,
        description: initialData.description
      });
    } else {
      setFormData(initialFormData);
    }
    setValidationErrors({});
  }, [initialData]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof MenuItemInput, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (formData.price <= 0) {
      newErrors.price = 'El precio debe ser mayor a 0';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    setValidationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSave(formData);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {initialData ? 'Editar Producto' : 'Nuevo Producto'}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isLoading}
                className={cn(
                  validationErrors.name && "border-red-500"
                )}
              />
              {validationErrors.name && (
                <span className="text-sm text-red-500">{validationErrors.name}</span>
              )}
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="price">Precio</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                disabled={isLoading}
                className={cn(
                  validationErrors.price && "border-red-500"
                )}
              />
              {validationErrors.price && (
                <span className="text-sm text-red-500">{validationErrors.price}</span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                disabled={isLoading}
                className={cn(
                  validationErrors.description && "border-red-500"
                )}
              />
              {validationErrors.description && (
                <span className="text-sm text-red-500">{validationErrors.description}</span>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-vento-primary to-vento-secondary text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Guardando...' : (initialData ? 'Guardar Cambios' : 'Crear Producto')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;