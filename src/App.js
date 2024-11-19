import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import RecuperarContraseña from './RecuperarContraseña';
import CrearCuenta from './CrearCuenta';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
      </Routes>
    </Router>
  );
}

export default App;
