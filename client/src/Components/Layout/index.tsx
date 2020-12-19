import * as React from "react";
import Header from "../Header";
import Main from "./styled/Main";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
export default Layout;
