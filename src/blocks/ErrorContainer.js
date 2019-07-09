import styled from "styled-components";

const Container = styled.section`
  display: flex;
  padding: 20px 10px;
  height: ${({ height }) => height || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  .alert {
    margin-bottom: 20px;
  }
`;
export default Container;
