import Pregunta from "./components/Pregunta";
import React, { useState } from 'react';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal">
        <Pregunta
          setPresupuesto={setPresupuesto}
          setRestante={setRestante}
        />
      </div>
    </div>
  );
}

export default App;
