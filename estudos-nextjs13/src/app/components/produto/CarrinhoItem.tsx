import ItemCarrinho from "@/models/ItemCarrinho";
import Moeda from "@/utils/Moeda";
import React from "react";

export default function CarrinhoItem(props: ItemCarrinho) {
  
  return (
    <div className="flex gap-2  items-center rounded-full bg-blue-500  ">
      <span className=" flex justify-center items-center w-7 h-7 p-2 rounded-full bg-blue-700">
        {props.quantidade}
      </span>
      <span className="pr-5">
        {Moeda.formatar(props.produto.preco * props.quantidade)}
      </span>
    </div>
  );
}
