import React from "react";
import { Header } from "../Header";
import { Container } from "../Container";

class Landing extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container style={{ padding: "110px 0 0" }}></Container>
      </>
    );
  }
}

export { Landing };
export default Landing;
