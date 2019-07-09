import thunk from "redux-thunk";
import storage from "localforage";
import promise from "redux-promise-middleware";
import errorMiddleware from "./middleware/error";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducer";

const middleware = applyMiddleware(errorMiddleware, thunk, promise);

const enhancer = composeWithDevTools(
  middleware
  // other store enhancers if any
);

const persistConfig = {
  key: "root",
  storage,
  debug: true
  // whitelist: ["authentication", "user"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

// let store = createStore(persistedReducer, enhancer);
// export let persistor = persistStore(store);
export default () => {
  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  return { store, persistor };
};
// export default store;
