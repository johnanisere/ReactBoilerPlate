import styled from "styled-components";

const Button = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(78, 92, 110);
  font-weight: 500;
  text-align: right;
  background-color: transparent;
  border: none;
  color: rgb(78, 92, 110);
  font-weight: 500;
  text-align: right;
  line-height: 30px;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  outline: none;
  img {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;

export default Button;
