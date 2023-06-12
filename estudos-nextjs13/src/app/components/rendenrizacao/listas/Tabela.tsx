import { time } from "console";

interface TabelaProps {
  times: string[];
}

export default function Tabela(props: TabelaProps) {
  const itens = props.times.map((time, i) => {
    return (
      <li
        key={time}
        className={`${i % 2 == 0 ? "bg-blue-400" : "bg-blue-800"} `}
      >
        {time}
      </li>
    );
  });
  return <div>{itens}</div>;
}
