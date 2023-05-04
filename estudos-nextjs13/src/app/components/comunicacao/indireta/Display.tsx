interface DisplayProps {
  valor: number;
}
export default function Display(props: DisplayProps) {
  return (
    <div className=" flex flex-1 bg-zinc-800 text-white rounded-md p-2 text-xl font-black justify-center items-center">
      {props.valor}
    </div>
  );
}
