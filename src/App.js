import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="home">
        <Home />
      </div>
    </>
  );
}

export default App;
