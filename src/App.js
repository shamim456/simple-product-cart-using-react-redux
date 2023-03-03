import logo from "./logo.svg";
import "./App.css";
import Shop from "./Component/Shop/Shop";
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Shop></Shop>;
      </div>
    </Provider>
  );
}

export default App;
