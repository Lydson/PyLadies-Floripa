import React, { useState } from 'react';
import './css/Evento.css';

const ModalSubscribeEventoPresencial = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nomePessoa: '',
    email: '',
    telefone: '',
    autorizoImagem: false,
    idEvento: '1',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/inscricaoEventoPresencial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
      onClose();
    } catch (error) {
      console.error('Erro ao enviar inscrição:', error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Inscrição no Evento Presencial</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>Nome:</label>
          <input type="text" name="nomePessoa" value={formData.nomePessoa} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Telefone:</label>
          <input type="number" name="telefone" value={formData.telefone} onChange={handleChange} required />

          <label>
            <input type="checkbox" name="autorizoImagem" checked={formData.autorizoImagem} onChange={handleChange} />
            Autorizo o uso da minha imagem
          </label>

          <div className="event-buttons">
            <button type="submit" className="btn-enviar">Enviar</button>
            <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSubscribeEventoPresencial;
