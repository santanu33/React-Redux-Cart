import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/main.js";
import "./styles.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer from "./reducers/reducers.js";
const store = createStore(rootReducer,
composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
)
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//https://redux.js.org/introduction/examples
