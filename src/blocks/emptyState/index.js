import styled from "styled-components";

import Title from "./Title";
import Content from "./Content";

const EmptyState = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  text-align: center;
  background: url(https://res.cloudinary.com/dwoc5fknz/image/upload/v1559569724/dottedwaves.jpg)
    0% 0% / cover no-repeat;
  padding: 0 20px;
  font-size: 16px;
  border-radius: 4px;
`;

EmptyState.Title = Title;
EmptyState.Content = Content;

export default EmptyState;
