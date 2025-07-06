import './App.css';
import { ThemeProvider } from './components/theme-provider';
import Header  from './components/header';
import Footer  from './components/footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Premiacoes from './pages/Premiacoes';
import Mentoria from './pages/Mentoria';

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
        </Routes>

        {/* Footer */}
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
