import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FacebookOutlined, Mail } from "@mui/icons-material"; // Check for case sensitivity
import {
  AppBar,
  styled,
  Typography,
  InputBase,
  Badge,
  Box,
  Avatar,
  Button,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import SchoolIcon from "@mui/icons-material/School";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Profile = () => {
  const [open, setOpen] = useState(false);
  console.log("Profile is rendering");
  function handleLogout() {
    window.location.replace("http://localhost:4000/logout");
  }
  function handleProfile() {
    window.location.replace("http://localhost:4000/profile");
  }
  function handleSetting() {
    window.location.replace("http://localhost:4000/setting");
  }
  function handleHome() {
    window.location.replace("/");
  }
  function handleChats() {
    window.location.replace("/");
  }
  function handleVideos() {
    window.location.replace("/");
  }
  function handleJobs() {
    window.location.replace();
  }
  function handleEvents() {
    window.location.replace();
  }
  function handleBookmarks() {
    window.location.replace();
  }
  function handleCourses() {
    window.location.replace();
  }

  const Search = styled("Box")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 30px",
    marginRight: "100px",
    borderRadius: "10px",
    alignItems: "center",
    width: "20%",
  }));
  const Icons = styled("Box")(({ theme }) => ({
    gap: "10px",
    display: "contents",
    alignItems: "center",
    marginRight: "10px",
  }));
  return (
    <div style={{background:'black', zIndex: 999}}>
      <AppBar sx={{ width: "100%" }}>
        <styledToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "15px",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
              display={"flex"}
              flex={1}
            >
              Facebook
            </Typography>
            <FacebookOutlined sx={{ display: { xs: "block", sm: "none" } }} />
            <IconButton color="inherit" sx={{ marginLeft: "10px" }}>
              <SearchIcon />
            </IconButton>
            <Search flex={4}>
              <InputBase placeholder="search..." />
            </Search>
            <Icons flex={2}>
              <Badge badgeContent={4} color="error" />
              <Mail />
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                onClick={(e) => setOpen(true)}
              />
            </Icons>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={(e) => setOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                onClick={(e) => {
                  handleProfile();
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  handleLogout();
                }}
              >
                Logout
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  handleSetting();
                }}
              >
                Setting
              </MenuItem>
            </Menu>
          </Box>
        </styledToolbar>
      </AppBar>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:"center",justifyItems:'center' }}>
        <Box  marginTop={"65px"} bgcolor={"GrayText"} p={3}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleHome();
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleSetting();
                }}
              >
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleHome();
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleChats();
                }}
              >
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="Chats" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleVideos();
                }}
              >
                <ListItemIcon>
                  <PlayCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Videos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleVideos();
                }}
              >
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleEvents();
                }}
              >
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleEvents();
                }}
              >
                <ListItemIcon>
                  <BookmarksIcon />
                </ListItemIcon>
                <ListItemText primary="Bookmarks" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  handleEvents();
                }}
              >
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItemButton>
            </ListItem>
          </List>
          <Button sx={{ margin: "2%" }} variant="contained">
            See More
          </Button>
        </Box>
      </div>

      <div >
        <Box marginTop={"-38%"} marginLeft={'20%'}>
          <Card sx={{ ml:"20",  width: "700px"}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image="https://latestforyouth.com/wp-content/uploads/2022/09/boy-profile-092201.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">px
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <br></br>
          <Card sx={{  width: "700px", marginTop: "50px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image="https://latestforyouth.com/wp-content/uploads/2022/09/boy-profile-092201.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">px
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{  width: "700px", marginTop: "50px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="500"
              image="https://latestforyouth.com/wp-content/uploads/2022/09/boy-profile-092201.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">px
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{  width: "700px", marginTop: "50px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="500"
              image="https://latestforyouth.com/wp-content/uploads/2022/09/boy-profile-092201.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">px
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
      <div style={{justifyContent:"flex-end"}}>
      <Typography>
      The social network turns 10 on February 4. CNET looks back at the many variations of the service over the years.
      </Typography>
      </div>
      
    </div>
  );
};

export default Profile;
