import ItemCarrinho from "@/models/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";
import CarrinhoVazio from "./CarrinhoVazio";
import Moeda from "@/utils/Moeda";

interface CarrinhoProps {
  itens: ItemCarrinho[];
}

export default function Carrinho(props: CarrinhoProps) {
  //pega todos os elementos da lista e realiza uma soma
  const total = props.itens.reduce((soma, item) => {
    return soma + item.quantidade * item.produto.preco;
  }, 0);
  return (
    <div className="flex flex-col   border border-white rounded-md overflow-hidden w-4/5">
      <div className="flex justify-between  items-center bg-zinc-100 text-3xl p-2">
        <span>Carrinho</span>
        <span>{Moeda.formatar(total)}</span>
      </div>
      <div className="p-5 flex gap-5 ">
        {props.itens.length === 0 ? (
          <CarrinhoVazio />
        ) : (
          props.itens.map((item, i) => {
            return <CarrinhoItem key={i} {...item} />;
          })
        )}
      </div>
    </div>
  );
}
