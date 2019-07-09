import React from "react";
import PropTypes from "prop-types";

import Header from "../blocks/header";

const App = ({ content }) => {

  return (
    <Header>
      <Header.Content>{content}</Header.Content>
      <Header.Button>
        .
      </Header.Button>
    </Header>
  );
};

App.propTypes = {
  content: PropTypes.string.isRequired
};

App.defaultProps = {};


export default App