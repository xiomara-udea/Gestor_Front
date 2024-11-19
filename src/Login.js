import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom
import './Login.css'; // Asegúrate de tener el archivo CSS correspondiente

function Login() {
  return (
    <div className="login-page">
      {/* Parte izquierda con el título y subtítulo */}
      <div className="left-side">
        <h1>Gestor de proyectos</h1>
        <p>Gestión eficiente a las solicitudes de proyectos</p>
      </div>

      {/* Parte derecha con el formulario de login */}
      <div className="right-side">
        <div className="login-container">
          <h2>Inicio de sesión</h2>

          {/* Formulario de inicio de sesión */}
          <div className="input-field">
            <label htmlFor="user">Usuario</label>
            <input type="text" id="user" placeholder="Usuario" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" />
          </div>

          <button className="login-btn">Iniciar sesión</button>

          {/* Enlaces de la parte inferior */}
          <div className="bottom-links">
            {/* Enlace a la página de recuperar contraseña */}
            <Link to="/recuperar-contraseña">¿Olvidaste tu contraseña?</Link>
            {/* Enlace a la página de crear cuenta */}
            <Link to="/crear-cuenta">¿No tienes cuenta? Regístrate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


