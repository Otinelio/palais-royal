import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Info, MapPin } from 'lucide-react';
import './MobileNav.css';

export default function MobileNav() {
  const location = useLocation();

  return (
    <div className="mobile-nav">
      <Link to="/" className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Home size={22} />
        <span className="poppins mobile-nav-label">Home</span>
      </Link>
      <Link to="/menu" className={`mobile-nav-item ${location.pathname.startsWith('/menu') ? 'active' : ''}`}>
        <UtensilsCrossed size={22} />
        <span className="poppins mobile-nav-label">Menu</span>
      </Link>
      <Link to="/about" className={`mobile-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
        <Info size={22} />
        <span className="poppins mobile-nav-label">À propos</span>
      </Link>
      <Link to="/contact" className={`mobile-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
        <MapPin size={22} />
        <span className="poppins mobile-nav-label">Contact</span>
      </Link>
    </div>
  );
}
