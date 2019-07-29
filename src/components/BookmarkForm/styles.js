import styled from "styled-components";

export const Container = styled.div`
  form {
    margin-bottom: 25px;

    button {
      display: none;
    }

    input {
      border: 1px solid #bfc6ca;
      color: #bfc6ca;
      padding: 10px 20px;
      border-radius: 5px;
      margin: 0 10px;

      ::placeholder {
        color: #bfc6ca;
        opacity: 1;
        text-transform: capitalize;
      }

      ::-webkit-input-placeholder {
        color: #bfc6ca;
        text-transform: capitalize;
      }
    }
  }
`;
