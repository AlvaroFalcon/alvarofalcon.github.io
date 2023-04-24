import TechnologiesContainer from "./TechnologiesContainer";

export default function Projects() {
  return (
    <section className={"flex w-full p-[5%] justify-between flex-col"}>
      <div className={"flex flex-row-reverse"}>
        <h1 className={"font-bold text-2xl"}>Projects</h1>
      </div>
      <div className={"flex flex-row w-full"}>
        <div className={"flex flex-col max-w-[40%] gap-4"}></div>
      </div>
    </section>
  );
}
