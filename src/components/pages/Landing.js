import React from "react";
import { Header } from "../Header";
import { Container } from "../Container";
import { Row, TwoThirdWidth, OneThirdWidth } from "../Grid";
import { PrimaryButton } from "../PrimaryButton";
import { colors } from ".././Tokens";

import rarePub from "../../assets/rarePub.png";
import img_2 from "../../assets/img_2.png";

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
                backgroundColor: colors.darkGey,
              }}
            >
              <img
                alt="logo"
                src={img_2}
                className="img"
                style={{
                  position: "absolute ",
                  width: "290px",
                  height: "248px",
                  left: "70px",
                  top: "200px",
                }}
              />
              <h1
                style={{
                  color: colors.sand,
                  textAlign: "justify",
                  letterSpacing: "0.1em",
                }}
              >
                WELKOM BIJ WERTHA BREWPUB!
              </h1>
              <p
                style={{
                  color: colors.sand,
                  textAlign: "justify",
                  letterSpacing: "0.1em",
                }}
              >
                Uit een grote passie voor bier en gezelligheid is Wertha Brewpub
                ontstaan, de splinternieuwe en gezelligste pub van Weert! Kom
                lekker genieten van heerlijke speciaalbieren of andere drankjes
                in onze huiskamersfeer pub.
              </p>

              <PrimaryButton>SEE ALL</PrimaryButton>
            </OneThirdWidth>
            <TwoThirdWidth style={{ backgroundColor: colors.lightGrey }}>
              <h1
                style={{
                  position: "absolute",
                  width: "785.66px",
                  height: "258px",
                  left: "220px",
                  top: "100px",
                  fontFamily: "Roboto",
                  fontWeight: "200",
                  color: colors.sand,
                  transform: "rotate(-90deg)",
                  fontSize: "96px",
                }}
              >
                WERTHA{" "}
              </h1>
              <h1
                style={{
                  position: "absolute",
                  width: "785.66px",
                  height: "258px",
                  left: "312px",
                  top: "120px",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  color: colors.sand,
                  transform: "rotate(-90deg)",
                  fontSize: "96px",
                }}
              >
                {" "}
                BREWPUB
              </h1>

              <div
                style={{
                  position: "absolute",
                  width: "492px",
                  height: "609px",
                  left: "752px",
                  top: "180px",
                  border: "4px solid #D0D0C7",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <img
                  alt="logo"
                  src={rarePub}
                  className="rarePub"
                  style={{
                    position: "absolute ",
                    width: "475px",
                    height: "594px",
                    left: "-20px",
                    top: "-20px",
                  }}
                />
              </div>
            </TwoThirdWidth>
          </Row>
        </Container>
      </>
    );
  }
}

export { Landing };
export default Landing;
