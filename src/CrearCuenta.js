import React, { useState } from 'react';
import './CrearCuenta.css'; // Asegúrate de tener el archivo CSS correspondiente

function CrearCuenta() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    usuario: '',
    edad: '',
    estrato: '',
    ciudad: '',
    contrasena: '',
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
    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Datos de la cuenta:', formData);
  };

  return (
    <div className="crear-cuenta-page">
      <div className="form-container">
        <h1>Crear Cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Introduce tu nombre"
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                placeholder="Introduce tus apellidos"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
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
            <div className="form-column">
              <label htmlFor="edad">Edad</label>
              <input
                type="number"
                id="edad"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                placeholder="Introduce tu edad"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="estrato">Estrato</label>
              <input
                type="number"
                id="estrato"
                name="estrato"
                value={formData.estrato}
                onChange={handleChange}
                placeholder="Introduce tu estrato"
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="ciudad">Ciudad</label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                placeholder="Introduce tu ciudad"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="contrasena">Contraseña</label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                placeholder="Introduce tu contraseña"
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmarContrasena"
                name="confirmarContrasena"
                value={formData.confirmarContrasena}
                onChange={handleChange}
                placeholder="Confirma tu contraseña"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default CrearCuenta;
