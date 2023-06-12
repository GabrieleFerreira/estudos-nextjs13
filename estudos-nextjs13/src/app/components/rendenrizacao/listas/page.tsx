import { Icons } from "tabler-icons-react";
import Tabela from "./Tabela";

export default function PaginaDeListaBasica() {
  const tabelaSerieA = [
    "Botafogo",

    "Fortaleza",

    "Palmeiras",

    "Internacional",

    "Fluminense",

    "Cruzeiro",

    "Grêmio",

    "São Paulo",

    "Vasco",

    "Atlético-MG",

    "Santos",

    "Bragantino",
  ];
  return (
    <div className=" flex  flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-black">Tabela Série A</h1>

      <Tabela times={tabelaSerieA} />
    </div>
  );
}
