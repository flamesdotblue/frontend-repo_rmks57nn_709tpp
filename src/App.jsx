import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSections from './components/PortfolioSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />

      <main>
        <Hero />

        <section aria-label="Content" className="relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-blue-50/40 dark:to-blue-500/5" />
          <div className="relative py-10 sm:py-14 lg:py-20">
            <PortfolioSections />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
