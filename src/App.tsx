import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { Crown } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Initial Loading Screen
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: '#1A1A1A', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', zIndex: 9999,
      animation: 'fadeOut 200ms ease-in forwards', animationDelay: '2000ms'
    }}>
      <style>{`
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
        @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes slideUpTitle { from { transform: translateY(8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes expandLine { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
      
      <div style={{
        animation: 'scaleIn 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        animationDelay: '200ms', opacity: 0
      }}>
        <Crown size={48} color="#D4AF37" />
      </div>
      
      <h1 className="playfair" style={{
        color: '#D4AF37', fontSize: '28px', marginTop: '16px', letterSpacing: '0.1em',
        animation: 'fadeIn 350ms ease-out forwards', animationDelay: '700ms', opacity: 0
      }}>
        PALAIS ROYAL
      </h1>
      
      <p className="poppins" style={{
        color: '#F5F0E8', fontSize: '13px', letterSpacing: '0.4em', marginTop: '8px',
        animation: 'slideUpTitle 300ms ease-out forwards', animationDelay: '1100ms', opacity: 0
      }}>
        DES SAVEURS
      </p>
      
      <div style={{
        width: '60px', height: '1px', backgroundColor: '#D4AF37', marginTop: '24px',
        transformOrigin: 'left', animation: 'expandLine 300ms linear forwards',
        animationDelay: '1600ms', transform: 'scaleX(0)'
      }}></div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AppProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div style={{ display: loading ? 'none' : 'block' }}>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/scan" element={<Menu scanMode={true} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}
