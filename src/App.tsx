import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import ProjetoDetalhe from './pages/ProjetoDetalhe';
import Premiacoes from './pages/Premiacoes';
import Mentoria from './pages/Mentoria';
import Sobre from './pages/Sobre';
import Colaboracoes from './pages/Colaboracoes';

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(open => !open);

  const routes = [
    { path: '/', element: <Home />, meta: { hasCarousel: true } },
    { path: '/projetos', element: <Projetos />, meta: { hasCarousel: true } },
    {
      path: '/projetos/:slug',
      element: <ProjetoDetalhe />,
      meta: { hasCarousel: false },
    },
    {
      path: '/premiacoes',
      element: <Premiacoes />,
      meta: { hasCarousel: false },
    },
    { path: '/mentoria', element: <Mentoria />, meta: { hasCarousel: false } },
    { path: '/sobre', element: <Sobre />, meta: { hasCarousel: false } },
    {
      path: '/colaboracoes',
      element: <Colaboracoes />,
      meta: { hasCarousel: false },
    },
  ];

  const currentRoute = routes.find(r => r.path === location.pathname);
  const hasCarousel = currentRoute?.meta?.hasCarousel ?? false;

  return (
    <div className="flex min-h-screen">
      {!hasCarousel && (
        <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebar} />
      )}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          !hasCarousel ? (sidebarOpen ? 'ml-64' : 'ml-16') : ''
        }`}
      >
        {hasCarousel && <Header />}

        <Routes>
          {routes.map(r => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
