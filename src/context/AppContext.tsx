import React, { createContext, useContext, useState, useEffect } from 'react';
import { getRestaurantData, saveRestaurantData } from '../data/restaurantData';
import type { RestaurantData, MenuItem } from '../data/restaurantData';

export interface CartItem extends MenuItem {
  qty: number;
}

interface AppContextType {
  restaurantData: RestaurantData;
  updateRestaurantData: (data: RestaurantData) => void;
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateCartQty: (itemId: number, qty: number) => void;
  clearCart: () => void;
  tableNumber: string;
  setTableNumber: (table: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [restaurantData, setRestaurantDataState] = useState<RestaurantData>(getRestaurantData());
  const [cart, setCart] = useState<CartItem[]>([]);
  const [tableNumber, setTableNumberState] = useState<string>('');

  useEffect(() => {
    const savedTable = localStorage.getItem('tableNumber');
    if (savedTable) setTableNumberState(savedTable);
  }, []);

  const setTableNumber = (table: string) => {
    setTableNumberState(table);
    localStorage.setItem('tableNumber', table);
  };

  const updateRestaurantData = (data: RestaurantData) => {
    setRestaurantDataState(data);
    saveRestaurantData(data);
  };

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateCartQty = (itemId: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) => prev.map((i) => (i.id === itemId ? { ...i, qty } : i)));
  };

  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider
      value={{
        restaurantData,
        updateRestaurantData,
        cart,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        tableNumber,
        setTableNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
