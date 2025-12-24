import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './UI';
export const Header = () => {
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
    const handleScrollToSection = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        // Only scroll if it's an anchor link
        if (href.startsWith('#')) {
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        else {
            // For external links or other paths
            window.location.href = href;
        }
    };
    return (_jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-950/90 backdrop-blur-md py-3 shadow-lg border-b border-border-subtle/20' : 'bg-transparent py-5'}`, children: [_jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "flex items-center gap-2 group", children: _jsx("img", { src: "https://i.postimg.cc/fydS24L2/Logo-conversy-SEM-FUNDO.png", alt: "Conversy", className: "h-16 md:h-20 w-auto object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,110,0,0.5)] transition-all" }) }), _jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [isHome && NAV_ITEMS.map((item) => (_jsx("a", { href: item.href, onClick: (e) => handleScrollToSection(e, item.href), className: "text-sm font-medium text-text-200 hover:text-primary-500 transition-colors", children: item.label }, item.label))), !isHome && (_jsx(Link, { to: "/", className: "text-sm font-medium text-text-200 hover:text-primary-500 transition-colors", children: "Voltar ao In\u00EDcio" }))] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { className: "hidden md:inline-flex text-sm px-5 py-2", onClick: (e) => handleScrollToSection(e, '#demo-form'), children: "Agendar Demo" }), _jsx("button", { className: "md:hidden text-text-100 p-2", onClick: () => setMobileMenuOpen(!mobileMenuOpen), children: mobileMenuOpen ? _jsx(X, {}) : _jsx(Menu, {}) })] })] }), mobileMenuOpen && (_jsxs("div", { className: "absolute top-full left-0 right-0 bg-bg-900 border-b border-border-subtle/50 p-4 md:hidden shadow-2xl flex flex-col gap-4", children: [isHome && NAV_ITEMS.map((item) => (_jsx("a", { href: item.href, onClick: (e) => handleScrollToSection(e, item.href), className: "text-base font-medium text-text-200 py-2 border-b border-border-subtle/30", children: item.label }, item.label))), !isHome && _jsx(Link, { to: "/", className: "text-base font-medium text-text-200 py-2", children: "Voltar ao In\u00EDcio" }), _jsx(Button, { fullWidth: true, onClick: (e) => handleScrollToSection(e, '#demo-form'), children: "Agendar Demo" })] }))] }));
};
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (_jsx("footer", { className: "bg-bg-950 border-t border-border-subtle/30 pt-16 pb-8", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-12", children: [_jsxs("div", { className: "col-span-1 md:col-span-1", children: [_jsx("div", { className: "flex items-center gap-2 mb-4", children: _jsx("img", { src: "https://i.postimg.cc/fydS24L2/Logo-conversy-SEM-FUNDO.png", alt: "Conversy", className: "h-20 md:h-24 w-auto object-contain" }) }), _jsx("p", { className: "text-text-300 text-sm leading-relaxed mb-6", children: "A tecnologia que entende, responde e converte. Transforme seu atendimento hoje." }), _jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: "#", className: "text-text-300 hover:text-primary-500 transition-colors", children: _jsx(Instagram, { size: 20 }) }), _jsx("a", { href: "#", className: "text-text-300 hover:text-primary-500 transition-colors", children: _jsx(Linkedin, { size: 20 }) }), _jsx("a", { href: "#", className: "text-text-300 hover:text-primary-500 transition-colors", children: _jsx(MessageCircle, { size: 20 }) })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-display font-bold text-text-100 mb-4", children: "Produto" }), _jsxs("ul", { className: "space-y-2 text-sm text-text-300", children: [_jsx("li", { children: _jsx("a", { href: "#solucao", className: "hover:text-primary-400 transition-colors", children: "Solu\u00E7\u00E3o" }) }), _jsx("li", { children: _jsx("a", { href: "#beneficios", className: "hover:text-primary-400 transition-colors", children: "Benef\u00EDcios" }) }), _jsx("li", { children: _jsx("a", { href: "#como-funciona", className: "hover:text-primary-400 transition-colors", children: "Como Funciona" }) }), _jsx("li", { children: _jsx("a", { href: "#cases", className: "hover:text-primary-400 transition-colors", children: "Cases de Sucesso" }) })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-display font-bold text-text-100 mb-4", children: "Empresa" }), _jsxs("ul", { className: "space-y-2 text-sm text-text-300", children: [_jsx("li", { children: _jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Sobre N\u00F3s" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Carreiras" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Blog" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Contato" }) })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-display font-bold text-text-100 mb-4", children: "Legal" }), _jsxs("ul", { className: "space-y-2 text-sm text-text-300", children: [_jsx("li", { children: _jsx(Link, { to: "/privacidade", className: "hover:text-primary-400 transition-colors", children: "Privacidade" }) }), _jsx("li", { children: _jsx(Link, { to: "/termos", className: "hover:text-primary-400 transition-colors", children: "Termos de Uso" }) }), _jsx("li", { children: _jsx(Link, { to: "#", className: "hover:text-primary-400 transition-colors", children: "LGPD" }) })] })] })] }), _jsxs("div", { className: "border-t border-border-subtle/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-300", children: [_jsxs("p", { children: ["\u00A9 ", currentYear, " Conversy Tecnologia Ltda. Todos os direitos reservados."] }), _jsx("p", { className: "flex items-center gap-1", children: "Feito com \u26A1\uFE0F para escalar vendas." })] })] }) }));
};
