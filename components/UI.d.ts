import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    fullWidth?: boolean;
    children: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    darker?: boolean;
}
export declare const Section: React.FC<SectionProps>;
export declare const Headline: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const Subheadline: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export {};
