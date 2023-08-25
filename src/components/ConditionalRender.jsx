import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Pedro");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      {name === "João" ? (
        <div>
          <h2>O nome é João</h2>
        </div>
      ) : (
        <div>
          <h2>Nome não encontrado!</h2>
        </div>
      )}
      <button onClick={() => setName("João")}>Mudar o nome</button>
    </div>
  );
};

export default ConditionalRender;
