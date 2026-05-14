import { useEffect } from 'react';
import { Heart, Star, Users, MapPin } from 'lucide-react';
import './About.css';

export default function About() {
  useEffect(() => {
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
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-bg img-palais"></div>
        <div className="about-hero-overlay"></div>
        <h1 className="playfair about-hero-title fade-in">Notre histoire</h1>
      </section>

      {/* HISTOIRE */}
      <section className="about-history reveal">
        <div className="about-history-grid">
          <div className="about-history-text slide-in-left">
            <span className="poppins section-label">L'ORIGINE</span>
            <h2 className="playfair section-title dark-text">Une ambition royale</h2>
            <p className="poppins">
              Né de la passion pour la grande gastronomie et de l'amour profond des saveurs locales, le Palais Royal des Saveurs a été imaginé comme un lieu de rencontre unique. Notre ambition : offrir à Lomé un espace où l'authenticité de la cuisine togolaise s'exprime avec la même élégance que les grands classiques internationaux.
            </p>
            <p className="poppins" style={{ marginTop: '16px' }}>
              Chaque plat raconte une histoire de fusion, de respect des produits et de générosité, pensé pour émerveiller vos sens dans un cadre digne d'un palais contemporain.
            </p>
          </div>
          <div className="about-history-image slide-in-right">
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" alt="Notre équipe" className="img-palais" />
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="about-values reveal">
        <h2 className="playfair section-title dark-text text-center slide-up">Nos Valeurs</h2>
        <div className="values-grid">
          <div className="value-card slide-up delay-100">
            <Heart size={28} color="#D4AF37" />
            <h3 className="playfair">Authenticité</h3>
            <p className="poppins">Le respect des recettes originelles et des produits du terroir togolais.</p>
          </div>
          <div className="value-card slide-up delay-200">
            <Star size={28} color="#D4AF37" />
            <h3 className="playfair">Excellence</h3>
            <p className="poppins">Une attention rigoureuse portée à chaque détail, de la cuisine au service.</p>
          </div>
          <div className="value-card slide-up delay-300">
            <Users size={28} color="#D4AF37" />
            <h3 className="playfair">Convivialité</h3>
            <p className="poppins">Un accueil chaleureux dans un cadre élégant où chaque invité est roi.</p>
          </div>
        </div>
      </section>

      {/* LOCALISATION */}
      <section className="about-location reveal">
        <div className="location-card slide-up delay-100">
          <MapPin size={32} color="#D4AF37" />
          <h2 className="playfair">Venez nous découvrir</h2>
          <p className="poppins location-address">
            Face au Collège Saint Michel,<br/>Djifa Kpota (Bè Kpota), Lomé, Togo
          </p>
        </div>
      </section>
    </div>
  );
}
