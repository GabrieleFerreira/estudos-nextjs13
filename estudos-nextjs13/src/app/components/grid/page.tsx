import Grid from "./Grid";

export default function Gridpage() {
  return (
    <div className=" flex justify-center items-center gap-5 h-screen w-4/5">
      <Grid>
        <div className=" h-36 w-full bg-purple-500"></div>
        <div className=" h-36 w-full bg-purple-500"></div>
        <div className=" h-36 w-full bg-purple-500"></div>
        <div className=" h-36 w-full bg-purple-500"></div>
      </Grid>
    </div>
  );
}
