import styled from "styled-components";

import Link from "./Link";
import Container from "./Container";

const Footer = styled.div`
  color: rgb(121, 127, 134);
  font-size: 14px;
  text-align: center;
  max-width: 100%;
  max-width: 760px;
  padding: 10px 0px;
  display: flex;
  margin: auto;
`;

Footer.Link = Link;
Footer.Container = Container;

export default Footer;
