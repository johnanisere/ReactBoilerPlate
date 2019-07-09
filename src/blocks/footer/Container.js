import styled from "styled-components";

const Container = styled.div`
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  text-align: ${({ align }) => align || "left"};
  flex: ${({ flex }) => (flex ? flex : 1)};
`;

export default Container;
