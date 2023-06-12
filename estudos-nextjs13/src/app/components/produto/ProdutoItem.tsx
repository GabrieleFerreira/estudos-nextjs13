import Produto from "@/models/Produto";
import Moeda from "@/utils/Moeda";
import Image from "next/image";
interface produtosItensProps {
  produto: Produto;
  comprar: (produto: Produto) => void;
}
export default function ProdutoItem(props: produtosItensProps) {
  const { produto } = props;
  return (
    <div className="flex flex-col border p-1 border-zinc-500 rounded-md ">
      <Image
        src={produto.imagem}
        width={300}
        height={300}
        alt="Imagem do produto"
        className="rounded-md "
      />
      <div className=" flex flex-col p-3 gap-3">
        <div className=" flex items-center justify-between ">
          <div className="text-2xl font-black">{produto.nome}</div>
          <div className="text-xl font-bold text-green-600">
            {Moeda.formatar(produto.preco)}
          </div>
        </div>
        <div className="flex flex-col">{produto.descricao}</div>
        <div>
          <button
            onClick={() => props.comprar(produto)}
            className="botao w-full hover:bg-blue-900"
          >
            comprar
          </button>
        </div>
      </div>
    </div>
  );
}
