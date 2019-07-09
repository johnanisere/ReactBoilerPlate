import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Root from "./Root";
import storage from "./store";
import Loading from "./components/Loader";
import ToastContainer from "./components/ToastContainer";
import ErrorBoundary from "./compositions/ErrorBoundary";
export const { store, persistor } = storage();
const App = () => (
  <ErrorBoundary>
    <ToastContainer />
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);

export default App;
