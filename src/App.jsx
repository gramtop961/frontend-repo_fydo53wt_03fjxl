import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 text-slate-800">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
