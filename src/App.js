import logo from "./soc-logo.svg";
import "./App.css";
import AddButton from "../src/Components/AddButton"
import AddImageButton from "../src/Components/AddImageButton"
import ChangeTitleButton from "../src/Components/ChangeTitleButton"

function App() {
  return (
    <div className="App">
      <AddButton/>
     <AddImageButton/>
     <ChangeTitleButton/>
    </div>
  );
}

export default App;
