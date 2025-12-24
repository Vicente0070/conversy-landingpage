import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Section, Headline, Button } from '../components/UI';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-950 font-sans text-text-100 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <Section className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-500 mb-8 animate-bounce-slow">
            <CheckCircle2 size={48} />
          </div>
          <Headline>Solicitação Recebida!</Headline>
          <p className="text-xl text-text-300 max-w-2xl mx-auto mb-10">
            Obrigado pelo interesse. Um de nossos especialistas entrará em contato via WhatsApp ou E-mail em breve para agendar seu diagnóstico.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar agora no WhatsApp
            </Button>
            <Link to="/">
              <Button variant="secondary">Voltar ao Início</Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};