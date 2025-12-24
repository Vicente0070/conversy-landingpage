import React from 'react';
import { Section, Headline, Subheadline } from '../components/UI';
import { LeadForm } from '../components/LeadForm';

export const FinalCTA: React.FC = () => {
  return (
    <Section id="demo-form" className="relative !py-24">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-primary-900/20 to-transparent pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Headline className="leading-tight">
            Pronto para transformar conversas em <span className="text-primary-500">resultados</span>?
          </Headline>
          <Subheadline className="mb-8">
            Cada mensagem não respondida é dinheiro deixado na mesa. Agende um diagnóstico gratuito e descubra quanto você pode economizar e faturar a mais com a Conversy.
          </Subheadline>
          
          <div className="bg-surface-800/50 p-6 rounded-xl border border-border-subtle/30 mb-8">
            <h4 className="font-bold text-text-100 mb-2">O que você ganha no diagnóstico:</h4>
            <ul className="space-y-2 text-sm text-text-200">
              <li className="flex items-center gap-2">✅ Análise do seu volume atual</li>
              <li className="flex items-center gap-2">✅ Projeção de ROI personalizada</li>
              <li className="flex items-center gap-2">✅ Demonstração da IA em tempo real</li>
            </ul>
          </div>
        </div>

        <div className="relative z-10">
          <LeadForm />
        </div>
      </div>
    </Section>
  );
};