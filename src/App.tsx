import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Premiacoes from './pages/Premiacoes';
import Mentoria from './pages/Mentoria';
import Sobre from './pages/Sobre';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        {/* Header com navegação e troca de tema */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/premiacoes" element={<Premiacoes />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

        {/* Footer */}
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
