import Produto from "@/models/Produto";
import ProdutoItem from "@/app/components/produto/ProdutoItem";
interface ListaProdutosProps {
  produtos: Produto[];
  comprar: (produto: Produto) => void;
}

export default function Listaprodutos(props: ListaProdutosProps) {
  return (
    <div className=" flex  justify-between mt-5 gap-5">
      {props.produtos.map((prod) => {
        return (
          <ProdutoItem key={prod.id} produto={prod} comprar={props.comprar} />
        );
      })}
    </div>
  );
}
