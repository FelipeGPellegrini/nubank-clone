import React from "react";
import "./Body.css";
import Logo from "../assets/Nubank_logo_2021.png";

export default function Body() {
  return (
    <div className="containerBody">
      <div className="content">
        <div className="boxInput">
          <img src={Logo} alt="" />
          <h2>Ainda não é cliente Nubank? Cadastre-se:</h2>
          <form>
            <input
              type="number"
              name="cpf"
              id="inputCpf"
              placeholder="Digite seu CPF..."
              minLength={11}
              required
            />
            <button id="button" type="submit">
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
