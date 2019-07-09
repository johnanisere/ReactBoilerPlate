import React from "react";
import PropTypes from "prop-types";

import { FaExclamationTriangle } from "react-icons/fa";
import ErrorContainer from "../blocks/ErrorContainer";

const App = ({ msg, height }) => (
  <ErrorContainer height={height}>
    <div className="alert">
      <FaExclamationTriangle color="red" size={45} />
    </div>
    <div>{msg || "Error occured :( Please reload"}</div>
  </ErrorContainer>
);
App.propTypes = {
  msg: PropTypes.string,
  height: PropTypes.string
};
export default App;
