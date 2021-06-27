import "./App.css";
import { FaAdn } from "react-icons/fa";
import { IconContext } from "react-icons";
function App() {
  return (
    <IconContext.Provider value={{ color: "red", size: "100px" }}>
      <div className="App">
        <FaAdn />
      </div>
    </IconContext.Provider>
  );
}

export default App;
