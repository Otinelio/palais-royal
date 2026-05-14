import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { restaurantData, tableNumber } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isScan = location.pathname === '/menu/scan';

  let navClass = 'navbar ';
  if (scrolled) navClass += 'scrolled';
  else if (isHome) navClass += 'home-top';
  else navClass += 'default';

  return (
    <nav className={navClass}>
      <div className="navbar-logo-container">
        <Link to="/" className="playfair navbar-logo">
          PALAIS ROYAL
        </Link>
        <span className="poppins navbar-subtitle">
          DES SAVEURS
        </span>
      </div>

      {isScan && tableNumber && (
        <div className="poppins navbar-table">
          Table {tableNumber}
        </div>
      )}

      {/* Desktop Links */}
      <div className="navbar-links">
        <Link to="/" className="poppins navbar-link">
          Accueil
        </Link>
        <Link to="/menu" className="poppins navbar-link">
          Menu
        </Link>
        <Link to="/about" className="poppins navbar-link">
          À propos
        </Link>
        <Link to="/contact" className="poppins navbar-link">
          Contact
        </Link>
        <a 
          href={`https://wa.me/${restaurantData.restaurant.whatsapp.replace(/\+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta poppins"
        >
          Commander
        </a>
      </div>
    </nav>
  );
}
