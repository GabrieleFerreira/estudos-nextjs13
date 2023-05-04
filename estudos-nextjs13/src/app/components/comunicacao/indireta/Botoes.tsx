interface BotaoProps {
  inc: (valor: number) => void;
  dec: (valor: number) => void;
}

export default function Botao(props: BotaoProps) {
  return (
    <div className=" flex justify-between pt-2 gap-2 ">
      <button className="botao flex-1" onClick={() => props.dec(2)}>
        Dec
      </button>
      <button className="botao flex-1" onClick={() => props.inc(1)}>
        Inc
      </button>
    </div>
  );
}
