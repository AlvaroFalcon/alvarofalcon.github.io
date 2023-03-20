import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

function Container(props: PropsWithChildren) {
  return <div className={"h-screen"}>{props.children}</div>;
}
export default function Home() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}
