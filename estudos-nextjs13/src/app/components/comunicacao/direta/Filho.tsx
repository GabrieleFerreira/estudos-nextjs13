interface FilhoProps {
  nome: string;
  sobrenome: string;
}
export default function Filho(props: FilhoProps) {
  return (
    <div className="flex justify-center items-center bg-green-500 p-5 gap-2 ">
      <span>Filho</span>
      <span>{props.nome}</span>
      <span>{props.sobrenome}</span>
    </div>
  );
}
