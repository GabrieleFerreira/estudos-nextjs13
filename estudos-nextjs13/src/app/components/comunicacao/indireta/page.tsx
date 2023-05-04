"use client";
import Contador from "./Contador";

export default function PaginaDosComponentesIndireta() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen gap-5">
        <h1 className="text-5xl mb-10"> Comunicação Indireta</h1>
        <div className="flex gap-5">
          <Contador />
          <Contador />
          <Contador />
        </div>
      </div>
    </>
  );
}
