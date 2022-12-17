import React from "react";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <div className="containerHeader">
        <div className="header">
          <ul>
            <li>Página inicial</li>
            <li>Para você</li>
            <li>Para seu negócio</li>
            <li>O Nubank</li>
            <li>Perguntas</li>
          </ul>
        </div>
        <div className="containerLogin">
          <span className="underlineEffect">
            Login
            <FiLogIn className="iconLogin" />
          </span>
        </div>
      </div>
    </>
  );
}
