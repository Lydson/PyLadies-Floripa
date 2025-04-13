import React from 'react';
import './JunteSe.css';

const JunteSe = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
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
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JunteSe;
