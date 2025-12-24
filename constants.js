export const NAV_ITEMS = [
    { label: 'Solução', href: '#solucao' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Cases', href: '#cases' },
    { label: 'FAQ', href: '#faq' },
];
export const FAQS = [
    {
        question: 'A IA fica robótica?',
        answer: 'Não. Nossa IA é treinada com processamento de linguagem natural (NLP) avançado, permitindo conversas fluidas, empáticas e contextuais que se assemelham muito ao atendimento humano.',
    },
    {
        question: 'Em quanto tempo fica pronto?',
        answer: 'O setup inicial leva em média 1 semana para diagnóstico e configuração, com validação e go-live completo geralmente ocorrendo em até 4 semanas.',
    },
    {
        question: 'Integra com meu sistema/CRM?',
        answer: 'Sim! Possuímos integração nativa via webhooks com as principais plataformas (HubSpot, Salesforce, RD Station, Kommo) e automadores como Zapier e Make.',
    },
    {
        question: 'Como garante o tom de voz da marca?',
        answer: 'Durante o onboarding, configuramos a "Persona" da IA com base nos seus manuais de marca, exemplos de conversas reais e diretrizes de tom de voz.',
    },
    {
        question: 'E quando a IA não souber responder?',
        answer: 'A Conversy identifica quando a dúvida foge do conhecimento da base e realiza o transbordo (hand-off) humanizado para um atendente real, com todo o histórico da conversa.',
    },
    {
        question: 'Isso substitui o time ou complementa?',
        answer: 'Complementa e potencializa. A IA assume o trabalho repetitivo e de triagem, permitindo que seu time focado em fechamentos complexos e relacionamento de alto valor.',
    },
];
export const PRICING_TIERS = [
    {
        name: 'Essencial',
        price: 'R$ 997',
        setup: 'R$ 1.500',
        features: [
            'Até 1.000 atendimentos/mês',
            'Treinamento básico de IA',
            'Integração CRM padrão',
            'Suporte por e-mail',
        ],
    },
    {
        name: 'Performance',
        price: 'R$ 1.997',
        setup: 'R$ 2.500',
        recommended: true,
        features: [
            'Até 5.000 atendimentos/mês',
            'IA Avançada com Personalização',
            'Dashboard de Métricas',
            'Gerente de Contas dedicado',
            'Otimização mensal',
        ],
    },
    {
        name: 'Escala',
        price: 'Sob Consulta',
        setup: 'Sob Consulta',
        features: [
            'Volume ilimitado',
            'IA Customizada Enterprise',
            'API Dedicada',
            'SLA Prioritário',
            'Consultoria de processos',
        ],
    },
];
