import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import MobileContainer from "./components/MobileContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MobileContainer />
      </Provider>
    </div>
  );
}

export default App;
