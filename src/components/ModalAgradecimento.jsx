import React from 'react';
import './css/ModalAgradecimento.css';

const ModalAgradecimento = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-card">
          <img
            className="modal-img"
            src="https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2F59215eaf-902d-4e2b-95d8-a5699656634d?csig=AAAAAAAAAAAAAAAAAAAAAPLKF8OSy4w4eWRNrEBcy79umTAaSoJhuwLVCF0VsCqf&exp=1744321724&signer=media-rpc&token=AAIAAU0AJDU5MjE1ZWFmLTkwMmQtNGUyYi05NWQ4LWE1Njk5NjU2NjM0ZAAAAAABliGtPmBYOGPrA6L4__4UVuXcA-9YUYleAYNhyDZYONI4Od-8Bg"
            alt="Agradecimento PyLadies"
          />
          <div className="modal-texto">
            <h2>Obrigada por se inscrever!</h2>
            <p>Você receberá um e-mail com mais detalhes em breve.</p>
            <button className="fechar-btn" onClick={onClose}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAgradecimento;
