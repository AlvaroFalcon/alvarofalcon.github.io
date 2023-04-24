import data from "../data-source/about.json";
export default function About() {
  return (
    <section className={"flex w-full p-[5%] justify-between flex-col"}>
      <div className={"flex"}>
        <h1 className={"font-bold text-2xl"}>{data.title}</h1>
      </div>
      <div className={"flex flex-row-reverse w-full"}>
        <p className={"max-w-[40%]"}>{data.text}</p>
      </div>
    </section>
  );
}
