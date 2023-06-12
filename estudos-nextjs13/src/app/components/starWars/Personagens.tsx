import useProcessando from "@/hooks/useProcessando";
import { useState } from "react";

export default function Personagens() {
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  async function simularChamadaAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
  }

  async function obterPersonagens() {
    try {
      iniciarProcessamento();
      await simularChamadaAPI();
    } finally {
      finalizarProcessamento();
    }
  }

  return (
    <>
      {processando ? (
        <div>Processando ....</div>
      ) : (
        <div className=" flex flex-col">
          Conteudos dos Personagens
          <button onClick={obterPersonagens}> clique aqui</button>
        </div>
      )}
    </>
  );
}
