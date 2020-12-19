import * as React from "react";
import { io } from "socket.io-client";
import Input from "./Components/Input";
import Layout from "./Components/Layout";
import MessagesBody from "./Components/MessagesBody";
import UsersList from "./Components/UsersList";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }
 html{
   min-height:100%;
 }
body{
  margin:0;
  padding:0;
}
`;
interface TypingProps {
  isTyping: boolean;
  nick: string;
}
export interface MessagesProps {
  user: string | null;
  message: string;
}
const App = () => {
  const [typingUserNick, setTypingUserNick] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messagesList, setMessagesList] = React.useState<MessagesProps[]>([]);
  const ENDPOINT = "http://127.0.0.1:5000";
  const socket = io(ENDPOINT);
  const localUser = window.localStorage.getItem("user");
  React.useEffect(() => {
    socket.on("typing", ({ isTyping, nick }: TypingProps) => {
      if (!isTyping) {
        setTypingUserNick("");
        return;
      }
      setTypingUserNick(nick);
    });
  }, []);

  const handleTyping = (e: { target: { value: string } }) => {
    socket.emit("typing", {
      isTyping: e.target.value.length > 0,
      nick: localUser,
    });
    setMessage(e.target.value);
  };
  const handleSend = (e: { preventDefault: () => void; key?: string }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setMessage("");
      setTypingUserNick("");
      const fullMessage = {
        user: localUser,
        message: message,
      };
      setMessagesList((old) => [...old, fullMessage]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <MessagesBody typingUser={typingUserNick} messagesList={messagesList} />
        <UsersList />
        <Input
          handleTyping={handleTyping}
          handleSend={handleSend}
          message={message}
        />
      </Layout>
    </>
  );
};

export default App;
