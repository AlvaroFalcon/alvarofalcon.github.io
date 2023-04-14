export default function Navbar() {
  return (
    <nav
      className={
        "flex flex-row justify-between py-2 px-[3%] bg-secondary text-white"
      }
    >
      <span>{"{ Alvaro }"}</span>
      <ul className={"flex flex-row gap-4"}>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
