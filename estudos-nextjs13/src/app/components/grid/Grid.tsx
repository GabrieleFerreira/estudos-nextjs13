interface GridProps {
  children: any;
}

export default function Grid(props: GridProps) {
  return (
    <div className=" grid gap-4  grid-cols-4 w-full">{props.children}</div>
  );
}
