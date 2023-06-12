"use client";
import { useState } from "react";
import Pergunta from "./Perguntas";

export default function PaginaFaq() {
  const [ativo, setAtivo] = useState<number>();

  function alternarVisibilidade(indice: number) {
    if (indice === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(indice);
    }
  }
  return (
    <div className="bg-black  flex flex-col gap-2 w-[90%] md:w-3/4  ">
      <Pergunta
        aberta={ativo === 0}
        verificarVisibilidade={alternarVisibilidade}
        indice={0}
        pergunta="Why do we use it?"
        resposta=" is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
      />
      <Pergunta
        aberta={ativo === 1}
        indice={1}
        verificarVisibilidade={alternarVisibilidade}
        pergunta="Why do we use it?"
        resposta=" is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
      />
      <Pergunta
        aberta={ativo === 2}
        indice={2}
        pergunta="Why do we use it?"
        verificarVisibilidade={alternarVisibilidade}
        resposta=" is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
      />
      <Pergunta
        aberta={ativo === 3}
        indice={3}
        verificarVisibilidade={alternarVisibilidade}
        pergunta="Why do we use it?"
        resposta=" is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
      />
    </div>
  );
}
