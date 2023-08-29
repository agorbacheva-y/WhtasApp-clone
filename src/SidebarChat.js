import { useEffect, useState } from "react";
import './SidebarChat.css';
import { Avatar } from '@mui/material';

function SidebarChat({ id, name, addNewChat}) {
  const [ seed, setSeed ] = useState("");

  // generate random avator for each chat room
  useEffect(() => {
    setSeed(Math.floor(Math.random() *5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat.");

    if (roomName) {
      //do something here
    }
  };

  return !addNewChat ? (
    // if it's not addNewChat show this:
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    // if it's addNewChat show this:
    <div  className='sidebarChat'
          onClick={createChat}
      >
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
