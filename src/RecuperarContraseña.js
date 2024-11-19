import React, { useState } from 'react';
import './RecuperarContraseña.css'; // Estilos para esta página

function RecuperarContraseña() {
  const [formData, setFormData] = useState({
    usuario: '',
    nuevaContrasena: '',
    confirmarContrasena: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nuevaContrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Aquí es donde iría la lógica para actualizar la contraseña en tu backend
    console.log('Recuperación de contraseña:', formData);
  };

  return (
    <div className="recuperar-contrasena-page">
      <div className="recuperar-contrasena-container">
        <h2>Recuperar Contraseña</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              placeholder="Introduce tu usuario"
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="nuevaContrasena">Nueva Contraseña</label>
            <input
              type="password"
              id="nuevaContrasena"
              name="nuevaContrasena"
              value={formData.nuevaContrasena}
              onChange={handleChange}
              placeholder="Introduce tu nueva contraseña"
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmarContrasena"
              name="confirmarContrasena"
              value={formData.confirmarContrasena}
              onChange={handleChange}
              placeholder="Confirma tu nueva contraseña"
              required
            />
          </div>

          <button type="submit" className="btn-submit">Actualizar Contraseña</button>
        </form>
      </div>
    </div>
  );
}

export default RecuperarContraseña;
