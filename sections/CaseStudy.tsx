import React from 'react';
import { Section, Headline, Button } from '../components/UI';
import { ArrowRight } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <Section id="cases" className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1920&auto=format&fit=crop" 
          alt="Bakery Background" 
          className="w-full h-full object-cover opacity-10 grayscale hover:grayscale-0 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-950 via-bg-950/90 to-transparent"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest border border-primary-500/30">
            Case de Sucesso
          </div>
          <Headline>La Bolaria: +40% em vendas automáticas em 30 dias</Headline>
          <p className="text-lg text-text-300 mb-8 leading-relaxed">
            "Antes da Conversy, perdíamos vendas por demorar a responder no almoço e finais de semana. Hoje, a IA agenda encomendas e tira dúvidas sozinha, e meu time só entra para fechar grandes pedidos de eventos."
          </p>
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-sm text-text-300">Atendimento</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">400+</p>
              <p className="text-sm text-text-300">Pedidos/mês via IA</p>
            </div>
          </div>
          <Button className="group" onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Quero resultados assim <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Mockup or Graphic */}
        <div className="hidden md:block">
          <div className="bg-surface-800/80 backdrop-blur-md p-6 rounded-2xl border border-border-subtle/30 shadow-2xl">
            <h4 className="font-bold text-text-100 mb-4 border-b border-border-subtle/30 pb-2">Resumo Mensal</h4>
            <div className="space-y-4">
               <div className="flex justify-between items-center">
                 <span className="text-text-300 text-sm">Leads Totais</span>
                 <span className="text-text-100 font-bold">1,240</span>
               </div>
               <div className="w-full bg-bg-950 h-2 rounded-full overflow-hidden">
                 <div className="bg-primary-500 h-full w-[80%]"></div>
               </div>
               
               <div className="flex justify-between items-center mt-4">
                 <span className="text-text-300 text-sm">Vendas Automáticas</span>
                 <span className="text-secondary-500 font-bold">R$ 45.200</span>
               </div>
               <div className="w-full bg-bg-950 h-2 rounded-full overflow-hidden">
                 <div className="bg-secondary-500 h-full w-[65%]"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};