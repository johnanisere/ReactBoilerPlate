import styled, { css } from "styled-components";

const Header = styled.header`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: rgb(4, 167, 0);
  padding: 20px 0px;
  margin: 0px 20px;
  border-bottom: 1px solid rgb(233, 236, 240);
  ${({ dark }) =>
    dark &&
    css`
      color: rgb(0, 0, 0);
    `}
`;

export default Header;
