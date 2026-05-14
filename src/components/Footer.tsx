import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageCircle, Camera, Music2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './Footer.css';

export default function Footer() {
  const { restaurantData } = useAppContext();

  return (
    <footer className="footer slide-up">
      <div className="footer-content">
        <div className="footer-col">
          <h2 className="playfair footer-logo">PALAIS ROYAL DES SAVEURS</h2>
          <p className="poppins footer-slogan">{restaurantData.restaurant.tagline}</p>
          <div className="footer-divider"></div>
        </div>

        <div className="footer-col">
          <h3 className="poppins footer-title">NAVIGATION</h3>
          <div className="footer-links">
            <Link to="/" className="poppins footer-link">Accueil</Link>
            <Link to="/menu" className="poppins footer-link">Menu</Link>
            <Link to="/about" className="poppins footer-link">À propos</Link>
            <Link to="/contact" className="poppins footer-link">Contact</Link>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="poppins footer-title">NOUS RETROUVER</h3>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span className="poppins">{restaurantData.restaurant.address}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={16} />
              <span className="poppins">{restaurantData.restaurant.hours}</span>
            </div>
            <a href={`https://wa.me/${restaurantData.restaurant.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="footer-contact-item whatsapp-link">
              <MessageCircle size={16} className="text-whatsapp" />
              <span className="poppins">WhatsApp</span>
            </a>
            <div className="footer-socials">
              <a href={restaurantData.restaurant.instagram.startsWith('http') ? restaurantData.restaurant.instagram : `https://instagram.com/${restaurantData.restaurant.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="footer-social">
                <Camera size={20} />
              </a>
              {restaurantData.restaurant.tiktok && (
                <a href={restaurantData.restaurant.tiktok} target="_blank" rel="noopener noreferrer" className="footer-social">
                  <Music2 size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <p className="poppins">© 2025 Palais Royal des Saveurs — Lomé, Togo. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
