import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DiceGame() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [wins, setWins] = useState(0);
  const [plays, setPlays] = useState(0);
  const [result, setResult] = useState('');

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    const sum = newDice1 + newDice2;

    setDice1(newDice1);
    setDice2(newDice2);
    setPlays(plays + 1);

    if (sum === 7 || sum === 11) {
      setWins(wins + 1);
      setResult('Ganhou!');
    } else {
      setResult('Perdeu!');
    }
  };

  const winPercentage = plays === 0 ? 0 : ((wins / plays) * 100).toFixed(2);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Jogo de Dados</h1>
      
      <div className="row justify-content-center mb-4">
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h2 className="display-1">🎲 {dice1}</h2>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h2 className="display-1">🎲 {dice2}</h2>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="btn btn-primary btn-lg mb-4"
        onClick={rollDice}
      >
        Jogar
      </button>
      
      <h2 className="text-info">{result}</h2>
      
      <div className="mt-4">
        <h4>
          Vitórias: <span className="text-success">{wins}</span> / Jogadas: <span className="text-danger">{plays}</span>
        </h4>
        <h4>
          Porcentagem de Vitórias: <span className="text-primary">{winPercentage}%</span>
        </h4>
      </div>
    </div>
  );
}

export default DiceGame;
