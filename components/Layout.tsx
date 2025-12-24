import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Instagram, Linkedin, Github } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './UI';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Only scroll if it's an anchor link
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links or other paths
      window.location.href = href;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-950/90 backdrop-blur-md py-3 shadow-lg border-b border-border-subtle/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://i.postimg.cc/fydS24L2/Logo-conversy-SEM-FUNDO.png" 
            alt="Conversy" 
            className="h-16 md:h-20 w-auto object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,110,0,0.5)] transition-all" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {isHome && NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="text-sm font-medium text-text-200 hover:text-primary-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          {!isHome && (
             <Link to="/" className="text-sm font-medium text-text-200 hover:text-primary-500 transition-colors">Voltar ao Início</Link>
          )}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button 
            className="hidden md:inline-flex text-sm px-5 py-2" 
            onClick={(e) => handleScrollToSection(e, '#demo-form')}
          >
            Agendar Demo
          </Button>

          <button 
            className="md:hidden text-text-100 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-900 border-b border-border-subtle/50 p-4 md:hidden shadow-2xl flex flex-col gap-4">
           {isHome && NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="text-base font-medium text-text-200 py-2 border-b border-border-subtle/30"
            >
              {item.label}
            </a>
          ))}
          {!isHome && <Link to="/" className="text-base font-medium text-text-200 py-2">Voltar ao Início</Link>}
          <Button 
            fullWidth 
            onClick={(e) => handleScrollToSection(e, '#demo-form')}
          >
            Agendar Demo
          </Button>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-950 border-t border-border-subtle/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://i.postimg.cc/fydS24L2/Logo-conversy-SEM-FUNDO.png" 
                  alt="Conversy" 
                  className="h-20 md:h-24 w-auto object-contain" 
                />
             </div>
             <p className="text-text-300 text-sm leading-relaxed mb-6">
               A tecnologia que entende, responde e converte. Transforme seu atendimento hoje.
             </p>
             <div className="flex gap-4">
               <a href="#" className="text-text-300 hover:text-primary-500 transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-text-300 hover:text-primary-500 transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="text-text-300 hover:text-primary-500 transition-colors"><MessageCircle size={20} /></a>
             </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-text-100 mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-text-300">
              <li><a href="#solucao" className="hover:text-primary-400 transition-colors">Solução</a></li>
              <li><a href="#beneficios" className="hover:text-primary-400 transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="hover:text-primary-400 transition-colors">Como Funciona</a></li>
              <li><a href="#cases" className="hover:text-primary-400 transition-colors">Cases de Sucesso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-100 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-text-300">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-100 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-300">
              <li><Link to="/privacidade" className="hover:text-primary-400 transition-colors">Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-primary-400 transition-colors">Termos de Uso</Link></li>
              <li><Link to="#" className="hover:text-primary-400 transition-colors">LGPD</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-subtle/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-300">
          <p>© {currentYear} Conversy Tecnologia Ltda. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">Feito com ⚡️ para escalar vendas.</p>
        </div>
      </div>
    </footer>
  );
};