import React from "react";
import Routes from "./components/Routes";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
