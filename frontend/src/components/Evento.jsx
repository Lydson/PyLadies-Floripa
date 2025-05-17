import React, { useState } from 'react';
import './css/Evento.css';
import Banner1 from '../assets/banner-1.png';
import ModalSubscribeEventoPresencial from './ModalSubscribeEventoPresencial';

const Evento = ({ isOpen, onClose }) => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal-title">Evento: Encontro PyLadies Floripa</h1>
        <div className="modal-card">
          <img
            className="modal-img"
            src={Banner1}
            alt="Imagem do evento das PyLadies"
          />
          <div className="modal-texto">
            <p>
              📅 <strong>Data:</strong> 02 de abril de 2025<br />
              🕗 <strong>Horário:</strong> 8h<br />
              📍 <strong>Local:</strong> Senac Florianópolis
            </p>
            <p>
              📌 <strong>Descrição:</strong><br />
              Junte-se a nós no Encontro PyLadies Floripa! 🚀✨ Será uma manhã de aprendizado, networking e troca de experiências sobre Python, tecnologia e inclusão no mundo da programação.
            </p>
            <p>
              🎟 <strong>Entrada gratuita!</strong> Mas as vagas são limitadas. Garanta a sua e venha fazer parte da nossa comunidade!
            </p>
            <div className="event-buttons">
              <button type="button" className="btn-enviar" onClick={() => setIsSubscribeOpen(true)}>
                Inscreva-se
              </button>
              <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
            </div>
          </div>
        </div>

        {/* Modal de Inscrição */}
        <ModalSubscribeEventoPresencial isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
      </div>
    </div>
  );
};

export default Evento;
