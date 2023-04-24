import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";

function Container(props: PropsWithChildren) {
  return <div className={"h-screen bg-light text-dark"}>{props.children}</div>;
}
export default function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
      <About />
      <Projects />
    </Container>
  );
}
