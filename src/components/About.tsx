export default function About() {
  return (
    <section className={"flex w-full p-[5%] justify-between flex-col"}>
      <div className={"flex"}>
        <h1 className={"font-bold text-2xl"}>About</h1>
      </div>
      <div className={"flex flex-row-reverse w-full"}>
        <p className={"max-w-[40%]"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at
          blanditiis, cum debitis dignissimos ex fugit impedit incidunt odit
          officia quae quia quod sunt, ullam!
        </p>
      </div>
    </section>
  );
}
