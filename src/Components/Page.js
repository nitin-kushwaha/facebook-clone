import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from '@mui/icons-material/Settings';
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PagesIcon from "@mui/icons-material/Pages";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AppsIcon from "@mui/icons-material/Apps";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from '@mui/icons-material/Logout';
import {
  List,
  ListItem,
  Button,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Container,
} from "@mui/material";
import { NavLink, Link, Outlet } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
function handleLogout() {
  console.log("handle");
  window.location.replace("http://localhost:4000/logout");
}

export default function Page() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <b>Facebook</b>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ background: "#white", width: "20%", overflow: "auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              overflow: 'scroll',
              paddingBottom: '20px',
              '-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none'
            }}
          >
            <List sx={{ pb: 6 }}>
              <NavLink
                to="home"
                style={{ textDecoration: "none", color: "#2f4f4f" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Creating an account" />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              <Link
                to="navbar"
                style={{ textDecoration: "none", color: "#2f4f4f" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Your profile" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link
              to="setting"
              style={{ textDecoration: "none", color: "#2f4f4f" }}
            >
              <ListItem disablePadding>
                <ListItemButton onClick={(e) => {}}>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              </Link>

              <Link
          to="simplecontainer" 
              style={{ textDecoration: "none", color: "#2f4f4f" }}
            >
              <ListItem disablePadding>
                <ListItemButton onClick={(e) => {}}>
                  <ListItemIcon>
                    <PhotoCameraIcon />
                  </ListItemIcon>
                  <ListItemText primary="Photos" />
                </ListItemButton>
              </ListItem>
              </Link>

              <Link to="videos"
              style={{ textDecoration: "none", color: "#2f4f4f" }}
              >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <YouTubeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Videos" />
                </ListItemButton>
              </ListItem>
              </Link>
               
              <Link to="gaming"
              style={{ textDecoration: "none", color: "#2f4f4f" }}
              >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gaming" />
                </ListItemButton>
              </ListItem>
              </Link>
                  
             
              <Link to="events"
              style={{ textDecoration: "none", color: "#2f4f4f" }}
              >
              <ListItem disablePadding>
                <ListItemButton onClick={(e) => {}}>
                  <ListItemIcon>
                    <EventAvailableIcon />
                  </ListItemIcon>
                  <ListItemText primary="Events" />
                </ListItemButton>
              </ListItem>
              </Link>
              <Link to="apps"
              style={{ textDecoration: "none", color: "#2f4f4f" }}
              >
              <ListItem disablePadding>
                <ListItemButton onClick={(e) => {}}>
                  <ListItemIcon>
                    <AppsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Apps" />
                </ListItemButton>
              </ListItem>
              </Link>

              <Link to="accessibility"
              style={{ textDecoration: "none", color: "#2f4f4f" }}
              >
              <ListItem disablePadding>
                <ListItemButton onClick={(e) => {}}>
                  <ListItemIcon>
                    <AccessibilityNewIcon />
                  </ListItemIcon>
                  <ListItemText primary="Accessibility" />
                </ListItemButton>
              </ListItem>
              </Link>
               
              <Link 
              to="privacy"
              style={{ textDecoration: "none", color: "#2f4f4f" }}
              
              >
              <ListItem disablePadding>
                <ListItemButton onClick={(e) => {}}>
                  <ListItemIcon>
                    <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary="Privacy,safety and security" />
                </ListItemButton>
              </ListItem>
              </Link>  

              <Link
                to="logout"
                style={{ textDecoration: "none", color: "#2f4f4f" }}
              >
              <ListItem disablePadding>
                <ListItemButton  onClick={(e) => {
                  handleLogout();
                }}>
                  <ListItemIcon>
                    <LogoutIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
              </Link>
            </List>
          </div>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}
        >
          <Container sx={{ maxWidth: "1300px!important" }}>
            <Box sx={{}}>
              <Outlet />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
