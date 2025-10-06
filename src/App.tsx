import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ORCA from './pages/ORCA';
import NeuralDetection from './pages/NeuralDetection';
import Technologies from './pages/Technologies';
import Components from './pages/Components';
import Development from './pages/Development';
import Financial from './pages/Financial';
import Scalability from './pages/Scalability';
import Regulations from './pages/Regulations';
import Focus from './pages/Focus';
import Future from './pages/Future';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orca" element={<ORCA />} />
          <Route path="/neural-detection" element={<NeuralDetection />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/components" element={<Components />} />
          <Route path="/development" element={<Development />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/scalability" element={<Scalability />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/future" element={<Future />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
