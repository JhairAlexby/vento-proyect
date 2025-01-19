export interface MenuItem {
    id: string;
    name: string;
    price: number;
    category: 'hamburguesas' | 'hotdogs';
    description: string;
  }
  
  export type MenuItemInput = Omit<MenuItem, 'id'> & {
    id?: string;
  };