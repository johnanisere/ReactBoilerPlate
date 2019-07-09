import styled, { css } from "styled-components";

import Header from "./Header";

const SectionLayout = styled.div`
  width: 100%;
  margin-bottom: 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 10px 0px;
  border-radius: 4px;
  box-sizing: border-box;
  ${({ loading }) =>
    loading &&
    css`
      .child {
        button {
          color: rgba(0, 0, 0, 0.3);
          opacity: 0.8;
          background-color: rgba(0, 13, 0, 0.5);
        }
        button[type="text"] {
          color: rgba(0, 0, 0, 0.3);
          opacity: 0.8;
          background-color: transparent;
        }
      }
    `}
`;

SectionLayout.Header = Header;
export default SectionLayout;
