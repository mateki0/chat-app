import styled from "styled-components";

const UserAvatar = styled.div<{ url?: boolean }>`
  width: 40px;
  height: 40px;
  background: ${(props) => (props.url ? `url(${props.url})` : "#fff")};
  border-radius: 50%;
  border: none;
`;
export default UserAvatar;
