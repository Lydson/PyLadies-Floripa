import React, { useState } from 'react';
import './css/ModalSubscribe.css';

const ModalSubscribe = ({ isOpen, onClose }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [referencia, setreferencia] = useState('');
  const [autorizacaoImagem, setautorizacaoImagem] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!autorizacaoImagem) {
      alert('Você precisa autorizar o uso da imagem para continuar.');
      return;
    }

    const inscricaoData = {
      nome,
      email,
      experiencia,
      referencia,
      autorizacaoImagem,
      idEvento: 2
    };

    try {
      const response = await fetch('http://localhost:3001/api/inscricaoProjeto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inscricaoData)
      });

      const data = await response.json();
      alert(data.message);
      onClose();
    } catch (error) {
      console.error('Erro ao enviar inscrição:', error);
      alert('Erro ao enviar inscrição.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="subscribe-card">
        <h2 className="subscribe-title">Inscrição do Projeto</h2>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <fieldset>
            <legend>Já tem experiência com Python?</legend>
            <label>
              <input
                type="radio"
                name="experiencia"
                value="sim"
                checked={experiencia === 'sim'}
                onChange={(e) => setExperiencia(e.target.value)}
                required
              /> Sim
            </label>
            <label>
              <input
                type="radio"
                name="experiencia"
                value="nao"
                checked={experiencia === 'nao'}
                onChange={(e) => setExperiencia(e.target.value)}
              /> Não
            </label>
          </fieldset>

          <label>
            Como ficou sabendo do evento/projeto?
            <select
              name="referencia"
              value={referencia}
              onChange={(e) => setreferencia(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="indicacao">Indicação</option>
              <option value="outro">Outro</option>
            </select>
          </label>

          <label className="checkbox-group">
            <input
              type="checkbox"
              name="autorizacaoImagem"
              checked={autorizacaoImagem}
              onChange={(e) => setautorizacaoImagem(e.target.checked)}
              required
            />
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