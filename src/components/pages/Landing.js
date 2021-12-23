import React from "react";
import { Header } from "../Header";
import { Container } from "../Container";
import { Row, TwoThirdWidth, OneThirdWidth } from "../Grid";

class Landing extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container style={{ padding: "110px 0 0" }}>
          <Row style={{ width: "calc(100% + 4rem)" }}>
            <OneThirdWidth
              style={{
                height: "90vh",
                backgroundColor: "#2A2A28",
              }}
            >
              <p>
                Uit een grote passie voor bier en gezelligheid is Wertha Brewpub
                ontstaan, de splinternieuwe en gezelligste pub van Weert! Kom
                lekker genieten van heerlijke speciaalbieren of andere drankjes
                in onze huiskamersfeer pub.
              </p>
            </OneThirdWidth>
            <TwoThirdWidth style={{ backgroundColor: "#4C4C48" }}>
              <p>dddd</p>
            </TwoThirdWidth>
          </Row>
        </Container>
      </>
    );
  }
}

export { Landing };
export default Landing;
