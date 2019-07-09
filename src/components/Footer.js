import React from "react";

import List from "./constants/footerItems";
import Footer from "../blocks/footer";

const App = () => (
  <Footer>
    {List.map(({ flex, link, title, align }, key) => (
      <Footer.Container flex={flex} key={key} align={align}>
        <Footer.Link
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow external"
        >
          {title}
        </Footer.Link>
      </Footer.Container>
    ))}
  </Footer>
);

export default App;
