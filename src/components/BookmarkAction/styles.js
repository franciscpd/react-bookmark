import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  width: 75px;

  button {
    background: transparent;
    border: none;
  }
`;
