import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
      
      <Router>
        <Sidebar />

        <Routes>
          <Route path="/rooms/:roomId" element={<Chat />} />
          <Route path="/app" element={<Chat />} />
          <Route path="/" element={<h1>Home Screen</h1>} />
        </Routes>
        
      </Router>
        
      </div>
    </div>
  );
}

export default App;
