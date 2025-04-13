import { useState } from 'react';
import './App.css';
import ModalAgradecimento from './components/ModalAgradecimento';
import JunteSe from './components/JunteSe';

function App() {
  const [mostrarAgradecimento, setMostrarAgradecimento] = useState(false);
  const [mostrarJunteSe, setMostrarJunteSe] = useState(false);

  return (
    <>
      <h1>PyLadies Floripa</h1>

      <button onClick={() => setMostrarAgradecimento(true)}>Abrir Agradecimento</button>
      <button onClick={() => setMostrarJunteSe(true)}>Abrir Junte-se</button>

      <ModalAgradecimento isOpen={mostrarAgradecimento} onClose={() => setMostrarAgradecimento(false)} />
      <JunteSe isOpen={mostrarJunteSe} onClose={() => setMostrarJunteSe(false)} />
    </>
  );
}

export default App;
