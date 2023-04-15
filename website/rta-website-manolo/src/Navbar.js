import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";
import './index.css'


export default function Navbar() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0 }}>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'transparent' }}>
        <div style={{ padding: 10, borderRadius: 40, alignSelf:"center"}}>
          <CustomListItem to="/home" icon={<HomeIcon style={{ fontSize: 40, marginLeft: "70%", color:"black"}} />} />
          <CustomListItem to="/history" icon={<HistoryIcon style={{ fontSize: 40, marginLeft: "70%" , color:"black"}}/>} />
          <CustomListItem to="/search" icon={<SearchIcon style={{ fontSize: 40, marginLeft: "70%", color:"black" }}/>} />
          <CustomListItem to="/profile" icon={<PersonIcon style={{ fontSize: 40, marginLeft: "70%", color:"black" }}/>} />
        </div>
        <div style={{ padding: 10 }}>
          <CustomListItem to="/" text="Logout" icon={<LogoutIcon />} />
        </div>
      </div>
    </div>
  );
}

function CustomListItem({ to, text, icon }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <ListItem
      button
      component={Link}
      to={to}
      className={isActive ? "active" : ""}
      style={{ backgroundColor: isActive ? "white" : "transparent", borderRadius: 40, padding: 30, width: "12rem"}}
    >
<ListItemIcon style={{ width: "3rem"}}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}