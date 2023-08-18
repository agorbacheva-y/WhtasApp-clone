import { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOffOutlined';
import AttachFile from "@mui/icons-material/AttachFile";
import MoreVert from '@mui/icons-material/MoreVert';
import InsertEmoticon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

function Chat() {
  const [ seed, setSeed ] = useState("");
  const [ input, setInput ] = useState("");

  // generate random avator for each chat room
  useEffect(() => {
    setSeed(Math.floor(Math.random() *5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>> ", input);

    setInput("");
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton> 
            <SearchOutlined />
          </IconButton>

          <IconButton> 
            <AttachFile />
          </IconButton>
          
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        <p className={`chat__message ${true && "chat__receiver"}`}>
          {/* user who logs in will evaluate to true */}
          <span className="chat__name">name</span>
          Hej
          <span className="chat__timestamp">time stamp</span>
        </p>
        
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input  type="text" 
                  placeholder="Type message" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
            />
          <button type="submimt"
                  onClick={sendMessage}
            >
              Send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;