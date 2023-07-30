import "./App.css";
import GetData from "./components/table";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <GetData />
      </div>
    </>
  );
}

export default App;
