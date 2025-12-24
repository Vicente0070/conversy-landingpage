import React, { useState } from 'react';
import { Section, Headline, Subheadline, Button } from '../components/UI';
import { FAQS } from '../constants';
import { 
  Users, Zap, BarChart3, ShieldCheck, 
  MessageSquare, TrendingDown, LayoutList, 
  CalendarCheck, AlertTriangle, Plus, Minus, Check
} from 'lucide-react';

// --- Social Proof ---
export const SocialProof: React.FC = () => (
  <section className="py-10 bg-bg-900 border-y border-border-subtle/20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-sm font-semibold text-text-300 uppercase tracking-widest mb-8">
        Confiada por operações de alta performance
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-50 hover:opacity-80 transition-opacity duration-300">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-8 w-32 bg-text-300/20 rounded animate-pulse" title="Client Logo Placeholder"></div>
        ))}
      </div>
    </div>
  </section>
);

// --- Benefits ---
export const Benefits: React.FC = () => {
  const items = [
    {
      icon: <MessageSquare className="w-6 h-6 text-primary-500" />,
      title: "Atendimento Humanizado",
      desc: "IA que entende contexto, gírias e intenção, não apenas palavras-chave."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-primary-500" />,
      title: "Redução de Custos",
      desc: "Diminua drasticamente o custo por atendimento e evite horas extras."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "Escala Ilimitada",
      desc: "Atenda 10 ou 10.000 clientes simultaneamente sem filas e sem aumentar a equipe."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      title: "Otimização Contínua",
      desc: "Dashboards que mostram gargalos e oportunidades de melhoria."
    }
  ];

  return (
    <Section id="solucao" darker>
      <div className="text-center mb-16">
        <Headline>O que a Conversy entrega</Headline>
        <Subheadline className="mx-auto">
          Tecnologia desenvolvida para elevar o nível do seu atendimento e vendas.
        </Subheadline>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-surface-800 p-8 rounded-2xl border border-border-subtle/30 hover:border-primary-500/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-bg-950 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/10 transition-colors">
              {item.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-text-100 mb-3">{item.title}</h3>
            <p className="text-text-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Alternating Features ---
export const Features: React.FC = () => {
  return (
    <>
      <Section id="beneficios">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-border-subtle/30 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-950 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                alt="Dashboard de Atendimento Centralizado" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Headline>Centralize o atendimento sem perder a humanização</Headline>
            <Subheadline className="mb-8">
              A Conversy assume o primeiro atendimento, qualifica, tira dúvidas e encaminha para fechamento quando necessário.
            </Subheadline>
            <ul className="space-y-4 mb-8">
              {['Fim das filas de espera', 'Padronização das respostas', 'Triagem automática de leads'].map(item => (
                <li key={item} className="flex items-center gap-3 text-text-200 font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500">
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="secondary">Ver como funciona</Button>
          </div>
        </div>
      </Section>

      <Section darker>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Headline>Dados e rastreabilidade para decidir rápido</Headline>
            <Subheadline className="mb-8">
              Não opere no escuro. Acompanhe motivos de contato, tempo de resposta e qualidade das conversas em tempo real.
            </Subheadline>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-bg-900 p-4 rounded-xl border border-border-subtle/30">
                <p className="text-xs text-text-300 uppercase mb-1">Motivos de Contato</p>
                <div className="h-2 w-full bg-surface-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 w-[70%]"></div>
                </div>
              </div>
              <div className="bg-bg-900 p-4 rounded-xl border border-border-subtle/30">
                <p className="text-xs text-text-300 uppercase mb-1">Qualidade do Lead</p>
                 <div className="h-2 w-full bg-surface-800 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-500 w-[45%]"></div>
                </div>
              </div>
            </div>
            <Button variant="secondary">Conhecer Dashboard</Button>
          </div>
          <div>
             <div className="relative rounded-2xl overflow-hidden border border-border-subtle/30 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-950 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Analytics e Dados" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

// --- Hidden Costs ---
export const HiddenCosts: React.FC = () => (
  <Section className="border-y border-border-subtle/20 bg-gradient-to-br from-bg-900 to-bg-950">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 text-red-500 text-sm font-bold mb-4">
        <AlertTriangle size={16} /> ALERTA DE CUSTO
      </div>
      <Headline>O WhatsApp manual custa mais do que parece</Headline>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
        {[
          { title: "Ausências", desc: "Faltas, licenças e férias deixam seu cliente esperando." },
          { title: "Trabalhista", desc: "Multas, rescisões e encargos pesam na folha de pagamento." },
          { title: "Oportunidade", desc: "Cada minuto de demora é um cliente indo para o concorrente." }
        ].map((item, i) => (
          <div key={i} className="bg-surface-800/50 p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-colors">
            <h4 className="font-bold text-text-100 mb-2">{item.title}</h4>
            <p className="text-text-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// --- Timeline ---
export const Timeline: React.FC = () => (
  <Section id="como-funciona" darker>
    <div className="text-center mb-16">
      <Headline>Implementação rápida</Headline>
      <Subheadline className="mx-auto">Do diagnóstico ao Go-Live em 4 semanas.</Subheadline>
    </div>
    <div className="relative">
      {/* Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-subtle/30 -translate-x-1/2 hidden md:block"></div>
      
      <div className="space-y-12">
        {[
          { week: "Semana 1", title: "Kickoff e Diagnóstico", text: "Mapeamento dos fluxos e base de conhecimento." },
          { week: "Semanas 2-3", title: "Integração e Setup", text: "Configuração da IA e conexão com CRM." },
          { week: "Semana 4", title: "Testes e Validação", text: "Simulações e ajustes finos de tom de voz." },
          { week: "Semana 5+", title: "Go-Live e Otimização", text: "Monitoramento contínuo de performance." }
        ].map((step, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
             <div className="flex-1 w-full md:text-right">
               {idx % 2 !== 0 && (
                 <div className="hidden md:block pr-8">
                    <span className="text-primary-500 font-bold tracking-widest text-sm mb-1 block">{step.week}</span>
                    <h3 className="text-xl font-bold text-text-100">{step.title}</h3>
                    <p className="text-text-300 mt-2">{step.text}</p>
                 </div>
               )}
               {/* Mobile Only View */}
               <div className="block md:hidden bg-surface-800 p-6 rounded-xl border border-border-subtle/30">
                  <span className="text-primary-500 font-bold tracking-widest text-sm mb-1 block">{step.week}</span>
                  <h3 className="text-xl font-bold text-text-100">{step.title}</h3>
                  <p className="text-text-300 mt-2">{step.text}</p>
               </div>
             </div>
             
             <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,110,0,0.5)] hidden md:flex">
               <div className="w-3 h-3 bg-white rounded-full"></div>
             </div>

             <div className="flex-1 w-full pl-0 md:pl-8">
                {idx % 2 === 0 && (
                 <div className="hidden md:block">
                    <span className="text-primary-500 font-bold tracking-widest text-sm mb-1 block">{step.week}</span>
                    <h3 className="text-xl font-bold text-text-100">{step.title}</h3>
                    <p className="text-text-300 mt-2">{step.text}</p>
                 </div>
               )}
             </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// --- Results ---
export const Results: React.FC = () => (
  <Section className="bg-gradient-to-b from-bg-950 to-surface-800/20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <Headline>Impacto real na operação</Headline>
        <Subheadline>
          Resultados médios obtidos por nossos clientes nos primeiros 60 dias de uso.
        </Subheadline>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-surface-800 p-6 rounded-2xl border border-border-subtle/30 shadow-xl">
           <h3 className="text-4xl md:text-5xl font-display font-bold text-primary-500 mb-2">-65%</h3>
           <p className="text-text-200 font-medium">Tempo em tarefas repetitivas</p>
        </div>
        <div className="bg-surface-800 p-6 rounded-2xl border border-border-subtle/30 shadow-xl">
           <h3 className="text-4xl md:text-5xl font-display font-bold text-secondary-500 mb-2">+25%</h3>
           <p className="text-text-200 font-medium">Eficiência operacional</p>
        </div>
      </div>
    </div>
  </Section>
);

// --- FAQ ---
export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" darker>
       <div className="text-center mb-12">
        <Headline>Perguntas Frequentes</Headline>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((item, idx) => (
          <div key={idx} className="bg-surface-800 border border-border-subtle/30 rounded-xl overflow-hidden">
            <button 
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-semibold text-text-100">{item.question}</span>
              {openIndex === idx ? <Minus className="text-primary-500" /> : <Plus className="text-text-300" />}
            </button>
            <div className={`px-6 text-text-300 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};