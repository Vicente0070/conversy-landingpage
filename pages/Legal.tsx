import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Section, Headline } from '../components/UI';

export const Legal: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="min-h-screen bg-bg-950 font-sans text-text-100 flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <Section>
          <Headline>{title}</Headline>
          <div className="prose prose-invert max-w-none text-text-300">
            <p>Última atualização: {new Date().toLocaleDateString()}</p>
            <p className="mt-8">
              Esta é uma página genérica de {title}. Em um ambiente de produção, aqui estariam os textos jurídicos completos referentes à LGPD, coleta de dados, cookies e termos de serviço da Conversy.
            </p>
            <h3 className="text-xl font-bold text-text-100 mt-6 mb-2">1. Coleta de Dados</h3>
            <p>Coletamos apenas os dados necessários para a prestação do serviço e contato comercial...</p>
            {/* More legal text placeholders */}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};