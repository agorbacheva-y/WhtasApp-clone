import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
      
      <Router>
        <Routes>
          <Sidebar />
          <Chat />
        </Routes>
      </Router>
        
      </div>
    </div>
  );
}

export default App;
