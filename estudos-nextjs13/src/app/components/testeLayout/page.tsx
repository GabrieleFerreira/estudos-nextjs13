import Grid from "./Grid";

export default function paginaLayout() {
  return (
    <div className="flex flex-col h-screen justify-center w-full items-center ">
      <div className=" w-[90%] lg:w-4/5">
        <Grid cols={1} md={4} sm={3} xl={5} x2l={8} lg={7}>
          <div className="h-24 bg-blue-500 w-full  "></div>
          <div className="h-24 bg-zinc-300 w-full   "></div>
          <div className="h-24 bg-yellow-500 w-full   "></div>
          <div className="h-24 bg-white w-full   "></div>
          <div className="h-24 bg-rose-500 w-full  "></div>
          <div className="h-24 bg-black w-full   "></div>
          <div className="h-24 bg-amber-500 w-full   "></div>
          <div className="h-24 bg-orange-950 w-full   "></div>
        </Grid>
      </div>
    </div>
  );
}
