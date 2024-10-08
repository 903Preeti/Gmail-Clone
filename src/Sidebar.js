import React from 'react';
import { Button, IconButton } from '@mui/material';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <div className='sidebar'>
      <Button
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
        startIcon={<AddIcon fontSize="large" style={{ paddingTop: '10px', paddingBottom: '10px', marginLeft: '5px'  }} />}
      >
        Compose
      </Button>


      <SidebarOption 
        Icon={InboxIcon}
        title="Inbox"
        number={9}
        selected={true}
        onClick={() => Navigate('/')}
      />
     <SidebarOption Icon={StarIcon} title="Starred" number={0} />
     <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={0} />
     <SidebarOption Icon={LabelImportantIcon} title="Important" number={9} onClick={() => Navigate('/')} />
     <SidebarOption Icon={NearMeIcon} title="Sent" number={0} />
     <SidebarOption Icon={NoteIcon} title="Drafts" number={0} />
     <SidebarOption Icon={ExpandMoreIcon} title="More" number={0} />
    
    <div className='sidebar_footer'>
      <div className='sidebar_footerIcons'>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </div>
    </div>
    
    </div>
  )
};

export default Sidebar;
