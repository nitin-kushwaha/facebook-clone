import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import GamesIcon from "@mui/icons-material/Games";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import HttpsIcon from "@mui/icons-material/Https";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import {
  Box,
  List,
  ListItem,
  Button,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
const Setting = () => {
  function handleSettings() {
    window.location.replace("");
  }
  function handleLogout() {
    window.location.replace("http://localhost:4000/logout")
  }
  return (
    <div style={{ marginLeft: "0px", overflow: "hidden",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
      <Box
        header
        sx={{
          textAlign: "center",
          backgroundColor: "#white",
          color: "#776B5D",
          width: "100%",
          padding: "1vh",
        }}
      >
        <h1><b>Settings</b></h1>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sidebar
          sx={{
            width: "30%",
            background: "#white",
            padding: "10vh",
            textAlign: "center",
            marginLeft: 0,
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Network & Internet" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText primary="Accounts" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <GamesIcon />
                </ListItemIcon>
                <ListItemText primary="Gaming" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <SystemUpdateIcon />
                </ListItemIcon>
                <ListItemText primary="Update & Security" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <HttpsIcon />
                </ListItemIcon>
                <ListItemText primary="Privacy" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box
          mainbar
          sx={{
            width: "40%",
            background: "#white",
            padding: "10vh",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText primary="Location" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <PhoneIphoneIcon />
                </ListItemIcon>
                <ListItemText primary="Mobile" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="Memories" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <OndemandVideoIcon />
                </ListItemIcon>
                <ListItemText primary="Video" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <VideoChatIcon />
                </ListItemIcon>
                <ListItemText primary="Video Chat" />
              </ListItemButton>
            </ListItem>
          </List>
          <br></br>
        </Box>
        <Box
          rightbar
          sx={{ width: "30%", background: "#white", padding: "10vh" }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <BookmarkIcon />
                </ListItemIcon>
                <ListItemText primary="Save" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <VideoChatIcon />
                </ListItemIcon>
                <ListItemText primary="Feeds" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <br></br>
            <ListItem disablePadding>
              <ListItemButton onClick={(e) => {}}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
            <br></br>
          </List>
        </Box>
      </Box>
      <Button variant="contained" color="success" style={{alignItems:"center",justifyContent:"center",textAlign:"center",margin:"3px"}}
      onClick={(e)=>{
        handleLogout()
      }}>
      Logout
    </Button>
    </div>
  );
};

export default Setting;
