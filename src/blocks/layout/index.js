import styled from "styled-components";

import Main from "./Main";
import Sidebar from "./SideBar";

const Layout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
`;

Layout.Main = Main;
Layout.Sidebar = Sidebar;

export default Layout;
