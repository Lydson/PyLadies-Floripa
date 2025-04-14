import { useState } from 'react';
import './App.css';
import ModalAgradecimento from './components/ModalAgradecimento';
import JunteSe from './components/JunteSe';
import Evento from './components/Evento';

function App() {
  const [mostrarAgradecimento, setMostrarAgradecimento] = useState(false);
  const [mostrarJunteSe, setMostrarJunteSe] = useState(false);
  const [abrirEvento, setAbrirEvento] = useState(false);

  return (
    <>
      <h1>PyLadies Floripa</h1>

      <button onClick={() => setMostrarAgradecimento(true)}>Abrir Agradecimento</button>
      <button onClick={() => setMostrarJunteSe(true)}>Abrir Junte-se</button>
      <button onClick={() => setAbrirEvento(true)}>Ver detalhes do evento</button>

      <ModalAgradecimento isOpen={mostrarAgradecimento} onClose={() => setMostrarAgradecimento(false)} />
      <JunteSe isOpen={mostrarJunteSe} onClose={() => setMostrarJunteSe(false)} />
      <Evento isOpen={abrirEvento} onClose={() => setAbrirEvento(false)} />

    </>
  );
}

export default App;
