// import React from "react";
// import { FacebookOutlined, Mail, Notifications } from "@mui/icons-material"; // Check for case sensitivity
// import {
//   AppBar,
//   styled,
//   Toolbar,
//   Typography,
//   InputBase,
//   Badge,
// } from "@mui/material";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  // const Search = styled("Box")(({ theme }) => ({}));
  // const Icons = styled("Box")(({ theme }) => ({}));

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Menu Icon */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Facebook Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Facebook
        </Typography>

        {/* Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 2 }}>
            Search
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;

<AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
