import { useState } from "react";
import { Icons } from "tabler-icons-react";

interface PerguntaProsp {
  indice: number;
  pergunta: string;
  resposta: string;
  aberta: boolean;
  verificarVisibilidade: (indice: number) => void;
}
export default function Pergunta(props: PerguntaProsp) {
  return (
    <>
      <div className="border border-white rounded-md overflow-hidden ">
        <div
          className="bg-zinc-400 cursor-pointer  text-white p-5 select-none "
          onClick={() => {
            props.verificarVisibilidade(props.indice);
          }}
        >
          {props.pergunta}
        </div>
        {props.aberta && <div className="p-5 text-white">{props.resposta}</div>}
      </div>
    </>
  );
}
