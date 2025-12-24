import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, Footer } from '../components/Layout';
import { Hero } from '../sections/Hero';
import { SocialProof, Benefits, Features, HiddenCosts, Timeline, Results, FAQ } from '../sections/LandingSections';
import { CaseStudy } from '../sections/CaseStudy';
import { FinalCTA } from '../sections/FinalCTA';
export const LandingPage = () => {
    return (_jsxs("div", { className: "min-h-screen bg-bg-950 font-sans text-text-100 selection:bg-primary-500 selection:text-white", children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(SocialProof, {}), _jsx(Benefits, {}), _jsx(Features, {}), _jsx(HiddenCosts, {}), _jsx(Timeline, {}), _jsx(Results, {}), _jsx(CaseStudy, {}), _jsx(FAQ, {}), _jsx(FinalCTA, {})] }), _jsx(Footer, {})] }));
};
