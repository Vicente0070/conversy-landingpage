import React, { useState } from 'react';
import { Button } from './UI';
import { LeadFormData } from '../types';
import { useNavigate } from 'react-router-dom';
import { Lock, Loader2 } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    segment: '',
    volume: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, send data to webhook/CRM here
    console.log('Form Submitted:', formData);
    
    // Tracking Event
    console.log('Event: form_submit');

    setLoading(false);
    navigate('/obrigado');
  };

  return (
    <div className="bg-surface-800 border border-border-subtle/50 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500 rounded-full blur-[100px] opacity-20"></div>

      <div className="relative z-10">
        <h3 className="font-display font-bold text-2xl text-text-100 mb-2">Agendar Demonstração</h3>
        <p className="text-text-300 mb-6 text-sm">Preencha para receber um diagnóstico personalizado.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-text-300 mb-1 uppercase tracking-wider">Nome *</label>
            <input
              required
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-bg-900 border border-border-subtle rounded-lg px-4 py-3 text-text-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-text-300/30"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-text-300 mb-1 uppercase tracking-wider">Empresa *</label>
            <input
              required
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-bg-900 border border-border-subtle rounded-lg px-4 py-3 text-text-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-text-300/30"
              placeholder="Nome da sua empresa"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="whatsapp" className="block text-xs font-semibold text-text-300 mb-1 uppercase tracking-wider">WhatsApp *</label>
              <input
                required
                type="tel"
                name="whatsapp"
                id="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full bg-bg-900 border border-border-subtle rounded-lg px-4 py-3 text-text-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-text-300/30"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-text-300 mb-1 uppercase tracking-wider">E-mail Corporativo *</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-bg-900 border border-border-subtle rounded-lg px-4 py-3 text-text-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-text-300/30"
                placeholder="nome@empresa.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <label htmlFor="segment" className="block text-xs font-semibold text-text-300 mb-1 uppercase tracking-wider">Segmento</label>
               <select
                name="segment"
                id="segment"
                value={formData.segment}
                onChange={handleChange}
                className="w-full bg-bg-900 border border-border-subtle rounded-lg px-4 py-3 text-text-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
               >
                 <option value="" disabled>Selecione</option>
                 <option value="varejo">Varejo</option>
                 <option value="servicos">Serviços</option>
                 <option value="saude">Saúde/Estética</option>
                 <option value="ecommerce">E-commerce</option>
                 <option value="outro">Outro</option>
               </select>
             </div>
             <div>
               <label htmlFor="volume" className="block text-xs font-semibold text-text-300 mb-1 uppercase tracking-wider">Conversas/Dia</label>
               <select
                name="volume"
                id="volume"
                value={formData.volume}
                onChange={handleChange}
                className="w-full bg-bg-900 border border-border-subtle rounded-lg px-4 py-3 text-text-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
               >
                 <option value="" disabled>Selecione</option>
                 <option value="<50">Até 50</option>
                 <option value="50-200">50 - 200</option>
                 <option value="200-500">200 - 500</option>
                 <option value="500+">500+</option>
               </select>
             </div>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <input required type="checkbox" id="lgpd" className="mt-1 w-4 h-4 rounded text-primary-500 bg-bg-900 border-border-subtle focus:ring-primary-500 focus:ring-offset-bg-900" />
            <label htmlFor="lgpd" className="text-xs text-text-300 leading-tight">
              Concordo em receber contatos da Conversy e aceito a Política de Privacidade.
            </label>
          </div>

          <Button type="submit" fullWidth disabled={loading} className="mt-6 group">
            {loading ? <Loader2 className="animate-spin mr-2" /> : null}
            {loading ? 'Enviando...' : 'Solicitar Demonstração'}
          </Button>

          <div className="flex items-center justify-center gap-2 text-text-300 text-xs mt-4">
            <Lock className="w-3 h-3" />
            <span>Seus dados estão seguros</span>
          </div>
        </form>
      </div>
    </div>
  );
};