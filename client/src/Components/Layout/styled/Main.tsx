import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-areas:
    "message list"
    "input input";
  grid-template-columns: repeat(12, 1fr);
`;
export default Main;
