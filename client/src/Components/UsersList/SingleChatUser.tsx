import * as React from "react";
import SingleUser from "./styled/SingleUser";
import UserAvatar from "./styled/UserAvatar";
import UserName from "./styled/UserName";

const SingleChatUser = ({ name }: { name: string }) => {
  return (
    <SingleUser>
      <UserName>{name}</UserName>
      <UserAvatar />
    </SingleUser>
  );
};

export default SingleChatUser;
