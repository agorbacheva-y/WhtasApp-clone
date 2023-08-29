import db from "./firebase.js";
import './Sidebar.css';
import { useState, useEffect } from "react";
import SidebarChat from './SidebarChat.js';
import { Avatar, IconButton } from '@mui/material';
import DonutLarge from '@mui/icons-material/DonutLarge';
import Chat from '@mui/icons-material/Chat';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';


function Sidebar() {
  // firebase collection
  const [ rooms, setRooms ] = useState([]);

  //go to rooms collection in firebase, take snapshot of latest screen
  //update rooms with data in rooms
  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc =>
        ({
          id: doc.id,
          data: doc.data(),
        })
      ))
    ));
    
    // unsubscribe is a cleanup function. whenever component unmounts, detach realtime
    // listener after using it
    return () => {
      unsubscribe();
    };
  },[]);

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
          <IconButton> 
            <DonutLarge />
          </IconButton>
          
          <IconButton>
            <Chat />
          </IconButton>
          
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat addNewChat />
        {rooms.map(room => (
          <SidebarChat 
            key={room.id} 
            id={room.id} 
            name={room.data.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

// IconButton makes icon a button