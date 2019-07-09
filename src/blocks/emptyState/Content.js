import styled, { css } from "styled-components";

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgb(233, 236, 240);
  padding: 50px 0;
  ${({ hideBorder }) =>
    hideBorder &&
    css`
      border: none;
    `}
`;

export default Content;
