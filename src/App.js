import { useState } from "react";
import * as S from "./style";
//importe tudo como S de nomedoarquivo

export default function App() {
  // primeiroValor é variável de estado
  // setPrimeiroValor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  // o 'e' é de 'event',ambos podem ser usados
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };
  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };
  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };
  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  return (
    <main>
      <h1>Calculadora</h1>
      {/* onChange é um evento de js, de mudança/alteração, pega a mudança que ocorre no input. Captura o que o usuário está digitando */}
      <input
        onChange={capturandoPrimeiroValor}
        type="number"
        placeholder="Insira um número"
      />
      <input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
      />
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button onClick={multiplicacao}>x</button>
      <button onClick={divisao}>/</button>
      <h3>{resultado}</h3>
    </main>
  );
}
