import React from 'react';
import { Button } from '../components/UI';
import { CheckCircle2, MessageSquare, TrendingUp, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Nova tecnologia Conversy 2.0
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-text-100 leading-[1.1] mb-6 tracking-tight">
              A tecnologia que <span className="text-transparent bg-clip-text bg-gradient-primary">entende, responde</span> e converte.
            </h1>
            
            <p className="font-sans text-lg sm:text-xl text-text-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transforme seu WhatsApp em um canal de vendas 24/7. Atendimento humanizado, controle total do funil e redução drástica de custos operacionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Agendar Demonstração
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver como funciona
              </Button>
            </div>

            <div className="space-y-3 max-w-md mx-auto lg:mx-0">
              {[
                "Atendimento 24/7 sem filas",
                "Redução de custos operacionais",
                "Rastreabilidade total das conversas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-200 text-sm font-medium">
                  <CheckCircle2 className="text-primary-500 w-5 h-5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content (Floating UI) */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
             {/* Abstract circle */}
             <div className="absolute w-[400px] h-[400px] border border-border-subtle/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
             <div className="absolute w-[500px] h-[500px] border border-border-subtle/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

             {/* Main Chat Interface Mockup */}
             <div className="relative bg-surface-800 border border-border-subtle rounded-3xl p-4 shadow-2xl max-w-sm w-full transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center gap-3 mb-4 border-b border-border-subtle/30 pb-3">
                 <div className="w-10 h-10 rounded-full bg-gradient-primary p-0.5">
                   <div className="w-full h-full bg-bg-950 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Agent" className="w-full h-full object-cover opacity-80" />
                   </div>
                 </div>
                 <div>
                   <h4 className="font-display font-bold text-text-100 text-sm">Agente Conversy</h4>
                   <p className="text-xs text-primary-400">Online agora</p>
                 </div>
               </div>
               
               <div className="space-y-3 mb-4">
                 <div className="bg-bg-900 rounded-2xl rounded-tl-none p-3 max-w-[85%] border border-border-subtle/20">
                   <p className="text-text-300 text-sm">Olá! Vi que você tem interesse no nosso plano Enterprise. Gostaria de agendar uma call?</p>
                 </div>
                 <div className="bg-primary-500/20 ml-auto rounded-2xl rounded-tr-none p-3 max-w-[85%] border border-primary-500/30">
                   <p className="text-text-100 text-sm">Sim, tenho disponibilidade amanhã às 14h.</p>
                 </div>
                 <div className="bg-bg-900 rounded-2xl rounded-tl-none p-3 max-w-[85%] border border-border-subtle/20">
                   <p className="text-text-300 text-sm">Perfeito! Já reservei na agenda do nosso especialista. Enviei o convite no seu e-mail. 🚀</p>
                 </div>
               </div>

               {/* Floating KPI Cards */}
               <div className="absolute -right-12 top-20 bg-surface-750 p-4 rounded-xl border border-border-subtle/50 shadow-xl backdrop-blur-sm animate-bounce-slow">
                 <div className="flex items-center gap-3">
                   <div className="bg-secondary-500/20 p-2 rounded-lg text-secondary-500">
                     <Clock size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-text-300">Tempo Resposta</p>
                     <p className="font-bold text-text-100 text-lg">Instantâneo</p>
                   </div>
                 </div>
               </div>

               <div className="absolute -left-8 bottom-10 bg-surface-750 p-4 rounded-xl border border-border-subtle/50 shadow-xl backdrop-blur-sm animate-bounce-slow delay-700">
                 <div className="flex items-center gap-3">
                   <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                     <TrendingUp size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-text-300">Conversão</p>
                     <p className="font-bold text-text-100 text-lg">+32%</p>
                   </div>
                 </div>
               </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};