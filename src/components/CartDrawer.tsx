import { useState } from 'react';
import { ShoppingCart, Minus, Plus, Trash2, MessageCircle, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import './CartDrawer.css';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, updateCartQty, removeFromCart, restaurantData, tableNumber } = useAppContext();
  const [note, setNote] = useState('');
  const location = useLocation();

  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const isScanMode = location.pathname === '/menu/scan';

  const handleOrder = () => {
    let itemsText = cart.map(i => `• ${i.name} x${i.qty} — ${i.price * i.qty} FCFA`).join('\n');
    let message = '';

    if (isScanMode && tableNumber) {
      message = `Commande — Table ${tableNumber} :\n\n${itemsText}\n\nTotal : ${total} FCFA`;
    } else {
      message = `Nouvelle Commande :\n\n${itemsText}\n\nTotal : ${total} FCFA`;
    }

    if (note) {
      message += `\n\nNotes: ${note}`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${restaurantData.restaurant.whatsapp.replace(/\+/g, '')}?text=${encoded}`, '_blank');
  };

  return (
    <>
      <div className="cart-drawer-overlay" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-drawer-header">
          <h2 className="playfair">Votre commande</h2>
          <button onClick={onClose} className="cart-drawer-close">
            <X size={24} />
          </button>
        </div>

        <div className="cart-drawer-content">
          {cart.length === 0 ? (
            <div className="cart-drawer-empty">
              <ShoppingCart size={56} style={{ opacity: 0.2 }} />
              <p className="poppins">Votre palais culinaire vous attend...</p>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="poppins cart-item-name">{item.name}</span>
                    <span className="poppins cart-item-price">{item.price} FCFA</span>
                  </div>
                  <div className="cart-item-actions">
                    <button className="cart-btn" onClick={() => updateCartQty(item.id, item.qty - 1)}>
                      <Minus size={16} />
                    </button>
                    <span className="poppins cart-qty">{item.qty}</span>
                    <button className="cart-btn" onClick={() => updateCartQty(item.id, item.qty + 1)}>
                      <Plus size={16} />
                    </button>
                    <button className="cart-btn trash" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} color="#8B1A2F" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <textarea 
              className="poppins cart-note" 
              placeholder="Instructions spéciales..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="cart-total-row">
              <span className="poppins total-label">Sous-total</span>
              <span className="playfair total-amount">{total} FCFA</span>
            </div>
            <button className="cart-cta poppins" onClick={handleOrder}>
              <MessageCircle size={18} />
              Commander sur WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
