import React from "react";
import PropTypes from "prop-types";
import EmptyState from "../blocks/emptyState";

const App = ({ title, description, hideBorder }) => (
  <EmptyState>
    <EmptyState.Content hideBorder={hideBorder}>
      <EmptyState.Title>{title}</EmptyState.Title>
      {description}
    </EmptyState.Content>
  </EmptyState>
);

App.propTypes = {
  title: PropTypes.string,
  hideBorder: PropTypes.bool,
  description: PropTypes.string.isRequired
};

App.defaultProps = {
  title: "",
  description: "",
  hideBorder: false
};

export default App;
