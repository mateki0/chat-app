import styled from "styled-components";

const UsersListWrapper = styled.section`
  width: 100%;
  height: 780px;
  grid-area: list;
  grid-column: span 3;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  > * {
    :not(last-child) {
      margin-bottom: 20px;
    }
  }
`;

export default UsersListWrapper;
