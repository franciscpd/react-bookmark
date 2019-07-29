import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  form {
    input {
      border: 1px solid #bfc6ca;
      background: transparent;
      color: #bfc6ca;
      padding: 10px 20px;
      border-radius: 5px;
      width: 100%;

      ::placeholder {
        color: #bfc6ca;
        opacity: 1;
      }

      ::-webkit-input-placeholder {
        color: #bfc6ca;
      }
    }
  }
`;
