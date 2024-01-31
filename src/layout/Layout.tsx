import React from "react";
import { Outlet } from 'react-router-dom'

import { Header, Footer } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

export const Layout: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <Header {...props} />
      <Outlet />
      <Footer />
    </>
  );
};

Header.defaultProps = {};

export default Header;
