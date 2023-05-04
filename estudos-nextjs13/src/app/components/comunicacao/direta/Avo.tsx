import Pai from "./Pai";

interface AvoProsp {
  nome: string;
  sobrenome: string;
}
export default function Avo(props: AvoProsp) {
  return (
    <>
      <div className=" flex  flex-col gap-5 bg-purple-500 text-white border p-5 rounded-md ">
        <div className=" flex justify-center items-center gap-2 text-2xl ">
          <span className="text-black">Avô</span>
          <span>{props.nome}</span>
          <span>{props.sobrenome}</span>
        </div>
        <div className="flex gap-5 ">
          <Pai nome="Gabriele" sobrenome={props.sobrenome} />
          <Pai nome="Tales" sobrenome={props.sobrenome} />
          <Pai nome="Marcos" sobrenome={props.sobrenome} />
        </div>
      </div>
    </>
  );
}
