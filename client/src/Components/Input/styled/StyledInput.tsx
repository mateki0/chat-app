import styled from "styled-components";

const StyledInput = styled.textarea`
  height: 110px;
  border: none;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 20px;
  resize: none;
  background-color: #1e1e1e;
  color: #fff;
  grid-area: input;
  grid-column: span 9;
  outline: 1px #1e1e1e solid;

  ::placeholder {
    color: #fff;
    opacity: 0.7;
  }
`;
export default StyledInput;
