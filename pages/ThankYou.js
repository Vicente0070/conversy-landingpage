import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, Footer } from '../components/Layout';
import { Section, Headline, Button } from '../components/UI';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
export const ThankYou = () => {
    return (_jsxs("div", { className: "min-h-screen bg-bg-950 font-sans text-text-100 flex flex-col", children: [_jsx(Header, {}), _jsx("main", { className: "flex-grow flex items-center justify-center", children: _jsxs(Section, { className: "text-center", children: [_jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-500 mb-8 animate-bounce-slow", children: _jsx(CheckCircle2, { size: 48 }) }), _jsx(Headline, { children: "Solicita\u00E7\u00E3o Recebida!" }), _jsx("p", { className: "text-xl text-text-300 max-w-2xl mx-auto mb-10", children: "Obrigado pelo interesse. Um de nossos especialistas entrar\u00E1 em contato via WhatsApp ou E-mail em breve para agendar seu diagn\u00F3stico." }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [_jsxs(Button, { onClick: () => window.open('https://wa.me/5511999999999', '_blank'), children: [_jsx(MessageCircle, { className: "mr-2 w-5 h-5" }), "Falar agora no WhatsApp"] }), _jsx(Link, { to: "/", children: _jsx(Button, { variant: "secondary", children: "Voltar ao In\u00EDcio" }) })] })] }) }), _jsx(Footer, {})] }));
};
