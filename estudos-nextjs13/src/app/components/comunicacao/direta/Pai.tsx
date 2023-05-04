import Filho from "./Filho";

interface PaiProps {
  nome: string;
  sobrenome: string;
}
export default function Pai(props: PaiProps) {
  return (
    <>
      <div className=" flex  flex-col gap-5 bg-purple-500 text-white border p-5 rounded-md ">
        <div className=" flex justify-center items-center gap-2 text-2xl ">
          <span className="text-black">Pai</span>
          <span>{props.nome}</span>
          <span>{props.sobrenome}</span>
        </div>
        <div className="flex gap-5 ">
          <Filho nome="Gabi" sobrenome={props.sobrenome} />
          <Filho nome="Fernanda" sobrenome={props.sobrenome} />
        </div>
      </div>
    </>
  );
}
