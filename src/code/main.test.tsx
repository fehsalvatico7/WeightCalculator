import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import main from "./main";

describe("main Component", () => {
  it("renders correctly", () => {
    render(<main />);

    // Verifica se o título e o botão estão presentes
    const title = screen.queryByText(/Calculadora de Peso/i);
    const button = screen.queryByText(/Calcular IMC/i);

    expect(title).not.toBeNull();
    expect(button).not.toBeNull();
  });

  it("calculates BMI on button click", () => {
    render(<main />);

    const calculateButton = screen.queryByText(/Calcular IMC/i);
    fireEvent.click(calculateButton!); 

    
    const result = screen.queryByText(/Seu IMC é/i);
    expect(result).not.toBeNull();
  });
});
