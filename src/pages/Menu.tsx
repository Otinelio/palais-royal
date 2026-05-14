import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Plus, Minus, Hash } from 'lucide-react';
import './Menu.css';

interface MenuProps {
  scanMode?: boolean;
}

export default function Menu({ scanMode = false }: MenuProps) {
  const { restaurantData, cart, addToCart, updateCartQty, tableNumber, setTableNumber } = useAppContext();
  const [activeCategory, setActiveCategory] = useState(restaurantData.categories[0]);
  const [showTableModal, setShowTableModal] = useState(scanMode && !tableNumber);
  const [tempTableNumber, setTempTableNumber] = useState('');

  // Handle table modal submission
  const handleTableSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempTableNumber.trim()) {
      setTableNumber(tempTableNumber.trim());
      setShowTableModal(false);
    }
  };

  // Scroll spy effect for categories could be implemented here,
  // but for simplicity, we'll just handle click to scroll.
  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category.replace(/[^a-zA-Z0-9]/g, '')}`);
    if (element) {
      // Offset for fixed header + category nav
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // If in scan mode and no table number is set, we ONLY show the modal,
  // the rest of the UI is blurred or hidden behind it.
  return (
    <div className={`menu-page fade-in ${showTableModal ? 'locked' : ''}`}>
      
      {/* Category Navigation (Sticky) */}
      <div className="category-nav-wrapper">
        <div className="category-nav">
          {restaurantData.categories.map(category => (
            <button
              key={category}
              className={`category-pill poppins ${activeCategory === category ? 'active' : ''}`}
              onClick={() => scrollToCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="menu-list">
        {restaurantData.categories.map(category => {
          const itemsInCategory = restaurantData.items.filter(item => item.category === category);
          if (itemsInCategory.length === 0) return null;

          return (
            <div key={category} id={`category-${category.replace(/[^a-zA-Z0-9]/g, '')}`} className="menu-category-section">
              <h2 className="playfair category-title">{category}</h2>
              <div className="menu-grid">
                {itemsInCategory.map(item => {
                  const cartItem = cart.find(i => i.id === item.id);
                  const imageSrc = item.image || `https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400`; // fallback

                  return (
                    <div key={item.id} className="menu-item-card">
                      <div className="menu-item-image-wrapper">
                        <img src={imageSrc} alt={item.name} className="menu-item-image img-palais" />
                        {item.popular && (
                          <div className="popular-badge poppins">POPULAIRE</div>
                        )}
                        {!item.available && (
                          <div className="unavailable-overlay poppins">ÉPUISÉ</div>
                        )}
                      </div>
                      
                      <div className="menu-item-content">
                        <div className="menu-item-header">
                          <h3 className="playfair menu-item-name">{item.name}</h3>
                        </div>
                        <p className="poppins menu-item-desc">{item.description}</p>
                        <div className="menu-item-footer">
                          <span className="poppins menu-item-price">{item.price} FCFA</span>
                          
                          {item.available && (
                            cartItem ? (
                              <div className="menu-item-controls">
                                <button className="control-btn" onClick={() => updateCartQty(item.id, cartItem.qty - 1)}>
                                  <Minus size={16} />
                                </button>
                                <span className="poppins control-qty">{cartItem.qty}</span>
                                <button className="control-btn" onClick={() => updateCartQty(item.id, cartItem.qty + 1)}>
                                  <Plus size={16} />
                                </button>
                              </div>
                            ) : (
                              <button className="add-btn" onClick={() => addToCart(item)}>
                                <Plus size={16} />
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Table Modal for Scan Mode */}
      {showTableModal && (
        <div className="table-modal-overlay">
          <div className="table-modal">
            <Hash size={40} color="#D4AF37" className="table-modal-icon" />
            <h2 className="playfair table-modal-title">Votre numéro de table ?</h2>
            <p className="poppins table-modal-subtitle">Entrez le numéro inscrit sur votre table</p>
            <form onSubmit={handleTableSubmit} className="table-modal-form">
              <input
                type="text"
                className="poppins table-input"
                placeholder="ex : 12"
                value={tempTableNumber}
                onChange={(e) => setTempTableNumber(e.target.value)}
                autoFocus
              />
              <button type="submit" className="table-btn poppins" disabled={!tempTableNumber.trim()}>
                Confirmer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
