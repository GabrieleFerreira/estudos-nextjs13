import { ReactNode } from "react";

interface GridProps {
  children: any;
  cols: number;
  sm: number;
  lg: number;
  md: number;
  xl: number;
  x2l: number;
}
export default function Grid(props: GridProps) {
  return (
    <div
      className={`grid  grid-cols-${props.cols ?? 1}
    ${props.sm ? `sm:grid-cols-${props.sm}` : " "}
    ${props.md ? `md:grid-cols-${props.md}` : " "}
    ${props.lg ? `lg:grid-cols-${props.lg}` : " "}
    ${props.xl ? `xl:grid-cols-${props.xl}` : " "}
    ${props.x2l ? `2xl:grid-cols-${props.x2l}` : " "}
    gap-4 w-full`}
    >
      {props.children}
    </div>
  );
}
