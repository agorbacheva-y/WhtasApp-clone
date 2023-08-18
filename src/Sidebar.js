import './Sidebar.css';
import SidebarChat from './SidebarChat.js';
import { Avatar, Icon, IconButton } from '@mui/material';
import DonutLarge from '@mui/icons-material/DonutLarge';
import Chat from '@mui/icons-material/Chat';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined'

function Sidebar() {
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;

// IconButton makes icon a button