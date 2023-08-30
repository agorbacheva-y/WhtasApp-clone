import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  const [ user, setUser ] = useState(null);

  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : (
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
      )}
    </div>
  );
}

export default App;
