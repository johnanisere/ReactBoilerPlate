import React from "react";
import PropTypes from "prop-types";

import { FaCheckCircle } from "react-icons/fa";
import ErrorContainer from "../blocks/ErrorContainer";

const App = ({ msg, height }) => (
  <ErrorContainer height={height}>
    <div className="alert">
      <FaCheckCircle color="rgb(4,167,0)" size={45} />
    </div>
    <div>{msg || "Successful"}</div>
  </ErrorContainer>
);
App.propTypes = {
  msg: PropTypes.string,
  height: PropTypes.string
};
export default App;
