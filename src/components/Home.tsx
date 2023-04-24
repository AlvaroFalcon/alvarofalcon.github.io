import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";

function Container(props: PropsWithChildren) {
  return <div className={"h-screen bg-light text-dark"}>{props.children}</div>;
}
export default function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
      <About />
    </Container>
  );
}
