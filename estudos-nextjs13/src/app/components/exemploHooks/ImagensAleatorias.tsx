import Image from "next/image";
import { useState } from "react";
export default function ImagensAleatoria() {
  const url = "https://source.unsplash.com/featured/";
  const [pesquisa, setPesquisa] = useState<string>("abstract");
  const [tamanho, setTamanho] = useState<number>(300);
  function redenrizarBotao(valor: string) {
    return (
      <button
        className=" bg-violet-400 px-4 py-2"
        onClick={() => {
          setPesquisa(valor);
          console.log(`${url}${pesquisa}`);
        }}
      >
        {valor}
      </button>
    );
  }

  return (
    <>
      <div className=" flex flex-col h-screen  gap-7">
        <div>
          <span> {pesquisa}</span>
          <span>{tamanho}</span>
        </div>
        <Image
          src={`${url}${tamanho}x${tamanho}${pesquisa}`}
          height={300}
          width={300}
        ></Image>
        {redenrizarBotao("abstract")}
        {redenrizarBotao("city")}
        {redenrizarBotao("person")}
        <div>
          <input
            type="number"
            value={tamanho}
            onChange={(e) => {
              setTamanho(+e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
