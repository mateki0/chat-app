import styled from "styled-components";

const IsTyping = styled.span<{ isTyping: boolean }>`
  color: #fff;
  font-size: 22px;
  display: ${(props) => (props.isTyping ? "block" : "none")};
  text-align: center;
`;

export default IsTyping;
