import React from 'react';
import './css/ModalSubscribe.css';

const ModalSubscribe = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="subscribe-card">
        <h2 className="subscribe-title">Inscrição no Evento</h2>
        <form className="subscribe-form">
          <label>
            Nome
            <input type="text" name="nome" required />
          </label>

          <label>
            E-mail
            <input type="email" name="email" required />
          </label>

          <fieldset>
            <legend>Já tem experiência com Python?</legend>
            <label>
              <input type="radio" name="experiencia" value="sim" required /> Sim
            </label>
            <label>
              <input type="radio" name="experiencia" value="nao" /> Não
            </label>
          </fieldset>

          <label>
            Como ficou sabendo do evento?
            <select name="origem" required>
              <option value="">Selecione</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="indicacao">Indicação</option>
              <option value="outro">Outro</option>
            </select>
          </label>

          <label className="checkbox-group">
            <input type="checkbox" name="autorizoImagem" required />
            Autorizo o uso da minha imagem para fotos e vídeos do evento.
          </label>

          <div className="subscribe-buttons">
            <button type="submit" className="btn-enviar">Enviar</button>
            <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSubscribe;
