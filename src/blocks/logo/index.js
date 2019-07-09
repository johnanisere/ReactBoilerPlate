import styled from "styled-components";

const Logo = styled.div`
  background-image: url(${process.env.REACT_APP_LOGO});
  background-size: contain;
  /* width: 183px; */
  width: 150px;
  height: 25px;
  background-position: center center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin-bottom: 50px;
`;

export default Logo;
