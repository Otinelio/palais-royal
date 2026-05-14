import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Globe, Truck, CalendarDays, UtensilsCrossed, ShoppingBag, MessageCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './Home.css';

export default function Home() {
  const { restaurantData } = useAppContext();

  useEffect(() => {
    // Simple intersection observer for scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="hero-bg img-palais"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="poppins hero-surtitle delay-300">RESTAURANT GASTRONOMIQUE · LOMÉ</p>
          <h1 className="playfair hero-title delay-500">Le goût qui fait la différence</h1>
          <p className="poppins hero-subtitle delay-700">Gastronomie africaine & européenne, face au Collège Saint Michel</p>
          <div className="hero-cta-group delay-900">
            <Link to="/menu" className="hero-cta-primary poppins">Voir le menu</Link>
            <a href={`https://wa.me/${restaurantData.restaurant.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="hero-cta-secondary poppins">Réserver via WhatsApp</a>
          </div>
        </div>
        {/* Simple CSS particles */}
        <div className="particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle p${i}`}></div>
          ))}
        </div>
      </section>

      {/* SECTION 2: NOTRE HISTOIRE */}
      <section className="history-section reveal">
        <div className="history-grid">
          <div className="history-image-col slide-up delay-100">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" alt="Intérieur du restaurant" className="history-img img-palais" />
          </div>
          <div className="history-text-col slide-up delay-300">
            <span className="poppins section-label">NOTRE HISTOIRE</span>
            <h2 className="playfair section-title dark-text">Un palais au cœur de Bè Kpota</h2>
            <p className="poppins section-desc">
              Bienvenue au Palais Royal des Saveurs, un espace où la générosité de la tradition togolaise rencontre l'élégance internationale. Situé face au Collège Saint Michel, nous vous invitons à vivre une expérience gastronomique unique dans un cadre chaleureux et royal.
            </p>
            <div className="history-divider"></div>
            <div className="history-stats">
              <div className="stat-item poppins">
                <strong>10h–00h</strong>
                <span>Ouverture</span>
              </div>
              <div className="stat-item poppins">
                <strong>Africain & Européen</strong>
                <span>Cuisine</span>
              </div>
              <div className="stat-item poppins">
                <strong>Sur place · Livraison</strong>
                <span>Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPÉCIALITÉS */}
      <section className="specialties-section reveal">
        <h2 className="playfair section-title text-center text-creme slide-up delay-100">Ce qui nous rend royaux</h2>
        <div className="specialties-grid">
          <div className="specialty-card slide-up delay-200">
            <ChefHat size={32} color="#D4AF37" />
            <h3 className="playfair">Cuisine africaine authentique</h3>
            <p className="poppins">Fufu, gboma dessi, yassa, grillades togolaises</p>
          </div>
          <div className="specialty-card slide-up delay-300">
            <Globe size={32} color="#D4AF37" />
            <h3 className="playfair">Saveurs du monde</h3>
            <p className="poppins">Pizzas, plats européens, gastronomie internationale</p>
          </div>
          <div className="specialty-card slide-up delay-400">
            <Truck size={32} color="#D4AF37" />
            <h3 className="playfair">Livraison & Sur place</h3>
            <p className="poppins">Commandez depuis chez vous ou venez vivre l'expérience</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: MENU EN IMAGES */}
      <section className="gallery-section reveal">
        <div className="text-center slide-up delay-100">
          <span className="poppins section-label">LE MENU EN IMAGES</span>
          <h2 className="playfair section-title dark-text">Chaque assiette, une promesse</h2>
        </div>
        <div className="gallery-grid slide-up delay-300">
          <div className="gallery-item large img-palais">
            <img src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800" alt="Poulet Yassa" />
            <div className="gallery-overlay">
              <span className="playfair">Poulet Yassa</span>
            </div>
          </div>
          <div className="gallery-item large img-palais">
            <img src="https://images.unsplash.com/photo-1558237748-0c681287c881?auto=format&fit=crop&q=80&w=800" alt="Fufu & Gboma" />
            <div className="gallery-overlay">
              <span className="playfair">Fufu & Gboma</span>
            </div>
          </div>
          <div className="gallery-item small img-palais">
            <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600" alt="Pizza artisanale" />
            <div className="gallery-overlay">
              <span className="playfair">Pizza Artisanale</span>
            </div>
          </div>
          <div className="gallery-item small img-palais">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" alt="Table élégante" />
            <div className="gallery-overlay">
              <span className="playfair">Table Élégante</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICES */}
      <section className="services-section reveal">
        <h2 className="playfair section-title text-center text-creme slide-up delay-100">Toutes les façons de savourer</h2>
        <div className="services-grid">
          <div className="service-col slide-up delay-200">
            <UtensilsCrossed size={28} color="#D4AF37" />
            <h3 className="playfair">Sur place</h3>
            <p className="poppins">Un cadre chic et chaleureux pour vos repas en famille ou d'affaires.</p>
          </div>
          <div className="service-col slide-up delay-300">
            <ShoppingBag size={28} color="#D4AF37" />
            <h3 className="playfair">À emporter</h3>
            <p className="poppins">Vos plats préférés préparés avec soin, prêts à être dégustés où vous le souhaitez.</p>
          </div>
          <div className="service-col slide-up delay-400">
            <CalendarDays size={28} color="#D4AF37" />
            <h3 className="playfair">Événements</h3>
            <p className="poppins">Privatisation et service traiteur pour vos célébrations les plus royales.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA LIVRAISON */}
      <section className="cta-section reveal">
        <div className="cta-content slide-up delay-100">
          <h2 className="playfair">Commandez maintenant</h2>
          <p className="poppins">Recevez votre repas royal directement chez vous</p>
          <a href={`https://wa.me/${restaurantData.restaurant.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="cta-btn poppins">
            <MessageCircle size={18} color="#25D366" />
            Commander via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
