import React from 'react';
import './JunteSe.css';

const JunteSe = () => {
  return (
      <div className="junte-card">
        <h2 className="junte-title">Junte-se a nós</h2>
        <form className="junte-form">
          <label>
            Nome
            <input type="text" name="nome" required />
          </label>
          <label>
            E-mail
            <input type="email" name="email" required />
          </label>
          <label>
            Motivo do interesse
            <textarea name="motivo" required></textarea>
          </label>
          <div className="junte-buttons">
            <button type="submit" className="btn-enviar">Enviar</button>
            <button type="button" className="btn-cancelar">Cancelar</button>
          </div>
        </form>
      </div>
  );
};

export default JunteSe;
