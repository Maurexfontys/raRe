import styled from "styled-components";

import { widths } from "./Tokens";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2rem;
  align-items: ${({ valign }) => {
    if (valign === "top") {
      return "flex-start";
    } else if (valign === "bottom") {
      return "flex-end";
    } else if (!valign) {
      return "normal";
    } else {
      return valign;
    }
  }};
`;

export const FullWidth = styled.div`
  width: ${widths.full};
  flex: 0 0 ${widths.full};
  min-width: ${widths.full};
  padding: 0 2rem;
`;

export const TwoThirdWidth = styled.div`
  width: ${widths.full};
  flex: 0 0 ${widths.full};
  min-width: ${widths.full};
  padding: 1rem 2rem;

  @media screen and (min-width: 768px) {
    width: ${widths.twothird};
    flex: 0 0 ${widths.twothird};
    min-width: ${widths.twothird};
  }
`;

export const OneThirdWidth = styled.div`
  width: ${widths.full};
  flex: 0 0 ${widths.full};
  min-width: ${widths.full};
  padding: 1rem 2rem;

  @media screen and (min-width: 768px) {
    width: ${widths.third};
    flex: 0 0 ${widths.third};
    min-width: ${widths.third};
  }
`;

export const HalfWidth = styled.div`
  width: ${widths.full};
  flex: 0 0 ${widths.full};
  min-width: ${widths.full};
  padding: 1rem 2rem;

  @media screen and (min-width: 768px) {
    width: ${widths.half};
    flex: 0 0 ${widths.half};
    min-width: ${widths.half};
  }
`;
