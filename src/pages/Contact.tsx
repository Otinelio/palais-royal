import { MapPin, Clock, MessageCircle, Camera } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './Contact.css';

export default function Contact() {
  const { restaurantData } = useAppContext();

  return (
    <div className="contact-page fade-in">
      <div className="contact-container">
        <div className="contact-info">
          <h1 className="playfair dark-text">Venez nous rendre visite</h1>
          
          <div className="contact-block">
            <MapPin size={20} color="#D4AF37" className="contact-icon pulse-icon" />
            <span className="poppins">{restaurantData.restaurant.address}</span>
          </div>
          
          <div className="contact-block">
            <Clock size={20} color="#D4AF37" className="contact-icon" />
            <span className="poppins">Ouvert de {restaurantData.restaurant.hours}, midi et soir</span>
          </div>
          
          <div className="contact-block">
            <MessageCircle size={20} color="#25D366" className="contact-icon" />
            <a href={`https://wa.me/${restaurantData.restaurant.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="poppins contact-link whatsapp">
              Nous contacter sur WhatsApp
            </a>
          </div>
          
          <div className="contact-block">
            <Camera size={20} color="#D4AF37" className="contact-icon" />
            <a href={`https://instagram.com/${restaurantData.restaurant.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="poppins contact-link">
              {restaurantData.restaurant.instagram}
            </a>
          </div>
        </div>

        <div className="contact-map">
          {/* Using a generic Google Maps embed for Lomé since exact iframe wasn't provided */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15869.658253106596!2d1.2403166999999998!3d6.131102899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3224b5422caf411d!2sB%C3%A8%2C%20Lom%C3%A9%2C%20Togo!5e0!3m2!1sen!2s!4v1683050100000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
