import styled from "styled-components";
import { colors, radius } from "./Tokens";

export const PrimaryButton = styled.button`
  height: 3rem;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.orange};
  cursor: pointer;
  border-radius: ${radius.small};
  border: 2;
  justify-content: center;
  padding: 0 4rem;
  margin: 1.6rem 0;
  ${(props) => {
    if (props.color === "orange" || props.color === "white") {
      return `
        border-color: ${colors.orange};
        background-color:transparent;
      `;
    } else {
      return `
      background-color:transparent;
      border-color: ${colors.orange};

      `;
    }
  }}
  &:hover {
    ${(props) => {
      if (props.color === "white" || !props.color) {
        return `
              background-color:transparent;
          color: ${colors.white};
        `;
      } else if (props.color === "orange") {
        return `
              background-color:transparent;
          color: ${colors.white};
        `;
      }
    }}
  }

  &[disabled] {
    pointer-events: none;
    user-select: none;
    opacity: 0.3;
  }

  ${({ size }) => {
    if (size === "small") {
      return `
        height: 6rem;
      `;
    }
  }};
`;
