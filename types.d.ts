export interface NavItem {
    label: string;
    href: string;
}
export interface FAQItem {
    question: string;
    answer: string;
}
export interface PricingTier {
    name: string;
    price: string;
    setup: string;
    features: string[];
    recommended?: boolean;
}
export interface LeadFormData {
    name: string;
    company: string;
    whatsapp: string;
    email: string;
    segment?: string;
    volume?: string;
}
