import styled from "styled-components";

const Sidebar = styled.section`
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  position: sticky;
  bottom: 0px;
  width: 280px;
  min-width: 280px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 10px 0px;
  z-index: 10;
  padding: 50px;
  box-sizing: border-box;
`;

export default Sidebar;
