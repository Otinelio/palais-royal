import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Footer from './Footer';
import CartFAB from './CartFAB';
import CartDrawer from './CartDrawer';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  // Don't show public layout components on admin page
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <MobileNav />
      <CartFAB onClick={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
