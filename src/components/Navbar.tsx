export default function Navbar() {
  return (
    <nav className={"flex flex-row justify-between p-2 bg-black"}>
      <span>{"{ Alvaro }"}</span>
      <ul className={"flex flex-row gap-4"}>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
