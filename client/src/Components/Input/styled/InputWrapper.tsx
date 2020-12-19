import styled from "styled-components";

const InputWrapper = styled.form`
  grid-column: span 12;
  display: grid;
  grid-template-areas: "input send";
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  position: relative;
  background-color: #1e1e1e;
`;

export default InputWrapper;
