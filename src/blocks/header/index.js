import styled from "styled-components";

import Button from "./Button";
import Content from "./Content";

const Header = styled.header`
  display: flex;
  padding-bottom: 40px;
  margin: 20px 0px;
  border-bottom: 1px solid rgb(233, 236, 240);
  width: 100%;
`;

Header.Button = Button;
Header.Content = Content;

export default Header;
