import * as React from "react";
import { io } from "socket.io-client";
import SingleChatUser from "./SingleChatUser";
import ActiveUsers from "./styled/ActiveUsers";
import UsersListWrapper from "./styled/UsersListWrapper";

const UsersList = () => {
  const ENDPOINT = "http://127.0.0.1:5000";
  const socket = io(ENDPOINT);
  const [userList, setUserList] = React.useState<string[]>([]);

  React.useEffect(() => {
    const localUser = window.localStorage.getItem("user");
    const user = localUser || `Gość${Math.floor(Math.random() * 100000)}`;
    socket.emit("new user", user);
    if (!localUser) {
      window.localStorage.setItem("user", user);
    }
    setUserList((oldList) => [...oldList, user]);

    return () => {
      socket.on("user disconnected", (user: string) => {
        let index = userList.indexOf(user);
        setUserList((oldArray) => oldArray.filter((a) => a !== user));
      });
    };
  }, []);
  console.log(userList);
  return (
    <UsersListWrapper>
      <ActiveUsers>Aktywni użytkownicy</ActiveUsers>
      {userList.map((name) => (
        <SingleChatUser name={name} key={name} />
      ))}
    </UsersListWrapper>
  );
};

export default UsersList;
