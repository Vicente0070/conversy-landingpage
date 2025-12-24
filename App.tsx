import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landing';
import { ThankYou } from './pages/ThankYou';
import { Legal } from './pages/Legal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYou />} />
        <Route path="/privacidade" element={<Legal title="Política de Privacidade" />} />
        <Route path="/termos" element={<Legal title="Termos de Uso" />} />
      </Routes>
    </Router>
  );
}

export default App;