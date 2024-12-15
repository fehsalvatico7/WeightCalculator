import React, { useState } from "react";
import"./main.css";

const WeightCalculator = () => {
  const [weight, setWeight] = useState(70); // Peso inicial em kg
  const [height, setHeight] = useState(1.7); // Altura inicial em metros
  const [bmi, setBmi] = useState (null); // Valor do IMC

  const calculateBMI = () => {
    const bmiValue = weight / (height * height);
    setBmi(bmiValue);
  };

  const getBMIMessage = () => {
    if (bmi === null) return "";
    if (bmi < 18.5) return "Abaixo do peso ideal";
    if (bmi >= 18.5 && bmi <= 24.9) return "Peso ideal";
    if (bmi >25 && bmi <30) return "Sobrepeso";
    if (bmi >30 && bmi <35) return "Obesidade grau I";
    if (bmi >35 && bmi <40) return "Obesidade grau II";
    if (bmi >40) return "Obesidade grau III";

    return "Acima do peso.";
  };

  return (
    <div className="weight-calculator-container">
      <h2 className="calcPeso">Calculadora de Peso</h2>

      <div className = "flex">
        <label className="weight-label">Peso: {weight} kg</label>
        <input
          type="range"
          min="30"
          max="150"
          step="1"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="weight-input"
        />
      </div>

      <div className="altura">
        <label className="height-label">Altura: {height.toFixed(2)} m</label>
        <input
          type="range"
          min="1.0"
          max="2.5"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="height-input"
        />
      </div>

      <button
        onClick={calculateBMI}
        className="calculate-button"
      >
        Calcular IMC
      </button>

      {bmi !== null && (
        <div className="result-container">
          <h3>Resultado:</h3>
          <p>
  Seu IMC é <span className="boldText">{bmi.toFixed(2)}</span>
</p>

          <p>{getBMIMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default WeightCalculator;
