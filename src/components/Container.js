import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ align }) => {
    if (align === "left" || !align) {
      return "flex-start";
    } else if (align === "right") {
      return "flex-end";
    } else {
      return align;
    }
  }};
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
