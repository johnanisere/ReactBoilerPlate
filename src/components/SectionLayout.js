import React from "react";
import PropTypes from "prop-types";

import SectionLayout from "../blocks/sectionLayout";

const App = ({ title, children, dark, loading }) => (
  <SectionLayout loading={loading}>
    <SectionLayout.Header dark={dark}>{title}</SectionLayout.Header>
    <div className="child">{children}</div>
  </SectionLayout>
);

App.propTypes = {
  dark: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default App;
