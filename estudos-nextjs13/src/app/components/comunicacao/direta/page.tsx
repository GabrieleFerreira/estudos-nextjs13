import Avo from "./Avo";

export default function PaginaDosComponentes() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen gap-5">
        <h1 className="text-5xl mb-10"> Comunicação Direta</h1>
        <Avo nome="Gabriele" sobrenome="Ferreira" />
        <Avo nome="Gabi" sobrenome="Silva" />
      </div>
    </>
  );
}
