import { ShoppingCart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './CartFAB.css';

interface CartFABProps {
  onClick: () => void;
}

export default function CartFAB({ onClick }: CartFABProps) {
  const { cart } = useAppContext();

  if (cart.length === 0) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <button className="cart-fab" onClick={onClick}>
      <ShoppingCart size={24} color="#1A1A1A" />
      <div className="cart-fab-badge poppins">
        {totalItems}
      </div>
    </button>
  );
}
