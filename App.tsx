
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import WhyVelocity from './components/WhyVelocity';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Terms from './components/Terms';
import ConciergeChat from './components/ConciergeChat';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'terms') {
        setActivePage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActivePage('home');
        
        // If there is a hash and it's not 'home', scroll to the element
        if (hash && hash !== 'home' && hash !== '/') {
          // Use a slightly longer timeout to ensure component rendering is complete
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 150);
        } else if (hash === 'home' || !hash) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (activePage === 'terms') {
      return <Terms />;
    }

    return (
      <>
        <Hero />
        <BookingForm />
        <Services limit={3} />
        <About />
        <WhyVelocity />
        <Fleet />
        <Gallery />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header activePage={activePage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <ConciergeChat />
      <Footer />
    </div>
  );
};

export default App;
