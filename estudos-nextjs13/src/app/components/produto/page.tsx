"use client";
import Produto from "@/models/Produto";
import ListaProdutos from "./ListaProduto";
import ProdutoItem from "./ProdutoItem";
import produtos from "@/constants/produtos";
import { useState } from "react";
import ItemCarrinho from "@/models/ItemCarrinho";
import Carrinho from "./Carrinho";

export default function PaginaProdutosItens() {
  // const produtositem = produtos[0];
  // const listaProdutos = produtos[2];
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarProduto(produto: Produto) {
    const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {
      quantidade: 0,
      produto,
    };
    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
    const outrosItens = itens.filter((item) => item.produto.id);
    setItens([...outrosItens, novoItem]);
  }
  return (
    <div className="flex justify-center items-center gap-10 ">
      <Carrinho itens={itens} />
      <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
    </div>
  );
}
