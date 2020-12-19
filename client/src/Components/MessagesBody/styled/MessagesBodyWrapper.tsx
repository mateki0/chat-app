import styled from "styled-components";

const MessagesBodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 780px;
  padding: 20px;
  background-color: #000;
  grid-area: message;
  grid-column: span 9;
  overflow-y: auto;
`;

export default MessagesBodyWrapper;
