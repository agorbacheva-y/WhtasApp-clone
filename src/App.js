import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [ {user}, dispatch ] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <div className="app__body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
            <Route path="/app" element={<Chat />} />
            <Route path="/" element={<Chat />} />
          </Routes>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
