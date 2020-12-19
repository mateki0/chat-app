import styled from "styled-components";

const MessageContainer = styled.div<{ user1?: boolean }>`
  font-size: 18px;
  line-height: 1.3;
  color: #fff;
  display: inline-block;
  align-self: ${(props) => (props.user1 ? "flex-start" : "flex-end")};
  max-width: 60%;
  border-radius: 15px;
  border: none;
  background-color: ${(props) => (props.user1 ? "#0e56fc" : "#3E3E3E")};
  padding: 15px;
  margin-bottom: 25px;
`;

export default MessageContainer;
