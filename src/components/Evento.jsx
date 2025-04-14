import React from 'react';
import './Evento.css';

const Evento = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal-title">Evento: Encontro PyLadies Floripa</h1>
        <div className="modal-card">
          <img
            className="modal-img"
            src="https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2Fdaeaabad-f395-4f10-824c-6649632b4108?csig=AAAAAAAAAAAAAAAAAAAAALR7yLXmbNE8uApnch6ua9h3E8krFbzbkWsTkQ_KXEeE&exp=1744687628&signer=media-rpc&token=AAIAAU0AJGRhZWFhYmFkLWYzOTUtNGYxMC04MjRjLTY2NDk2MzJiNDEwOAAAAAABljd8fuAJ-_ANOCjgYNGLm-e0n8m3d59CdiRgQWCmaZ_BKtDeYg"
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
            <button className="fechar-btn" onClick={onClose}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evento;
