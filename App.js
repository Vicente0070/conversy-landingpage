import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landing';
import { ThankYou } from './pages/ThankYou';
import { Legal } from './pages/Legal';
function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/obrigado", element: _jsx(ThankYou, {}) }), _jsx(Route, { path: "/privacidade", element: _jsx(Legal, { title: "Pol\u00EDtica de Privacidade" }) }), _jsx(Route, { path: "/termos", element: _jsx(Legal, { title: "Termos de Uso" }) })] }) }));
}
export default App;
