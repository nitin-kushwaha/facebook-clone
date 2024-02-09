import React, { useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FacebookOutlined, Mail, Notifications } from "@mui/icons-material"; // Check for case sensitivity
import {
  AppBar,
  styled,
  Typography,
  InputBase,
  Badge,
  Box,
  Avatar,
  Modal,
} from "@mui/material";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Card,
  CardContent,
  CardMedia,
  createTheme,
} from "@mui/material";

import Favorite from "@mui/icons-material/Favorite";
import MoreVert from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Share from "@mui/icons-material/Share";
import { CardHeader, CardActions } from "@mui/material";
import video1 from "../public/v1.mp4";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ManIcon from '@mui/icons-material/Man';
import CakeIcon from '@mui/icons-material/Cake';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const [notification, setNotification] = useState(false);
  const [logout, setLogout] = useState(false);
  const [home, sethome] = useState(false);
  const [setting, setsetting] = useState(false);
  const [profile, setprofile] = useState(false);
  const [page, setpage] = useState(false);
  const [friend, setfriend] = useState(false);
  const [link, setlink] = useState(false);


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
  const [file,setFile] = useState ();
  const handleChange=(e)=>{
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const inputRef = useRef(null);
  const [image,setImage] = useState("");
  const handleImageClick = () => {
    inputRef.current.Click();
  }
  const handleImageChange = (event) =>{
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  }
  function handleProfile() {
    window.location.replace("");
  }
  function handleLogout() {
    console.log("handle");
    window.location.replace("http://localhost:4000/logout");
  }
  function handleHome() {
    window.location.replace("http://localhost:4000");
  }
  function handleSetting() {
    console.log("handle");
    window.location.replace("http://localhost:4000/setting");
  }
  function handleProfile() {
    window.location.replace("http://localhost:4000/profile");
  }
  function handlePage() {
    window.location.replace("http://localhost:4000/Page");
  }
  function handleGroups() {
    window.location.replace("http://localhost:4000/groups");
  }
  function handleFriends() {
    window.location.replace("http://localhost:4000/Friends");
  }
  return (
    <div>
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
            <Icons flex={2} sx={{}}>
              <Mail sx={{ margin: "1vh" }} onClick={(e) => setMessage(true)} />

              <Menu
                sx={{ minWidth: "20%", marginBottom: "5px" }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={message}
                onClose={(e) => setMessage(false)}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "#3559E0",
                    marginTop: "-10px",
                  }}
                >
                  <Box>
                    <CloseIcon />
                  </Box>
                  <MenuItem sx={{ color: "#white" }}>Chats</MenuItem>
                  <Box style={{ display: "flex", margin: "5px" }}>
                    <IconButton>
                      <SettingsIcon />
                    </IconButton>
                    <IconButton>
                      <VideoCallIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box sx={{ textAlign: "center", margin: "5px" }}>
                  <input
                    style={{
                      borderRadius: "10px",
                      padding: "8px",
                      width: "50%",
                    }}
                    type="text"
                    id="mySearch"
                    placeholder="Search.."
                  />
                </Box>

                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Rohit" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Rohit Singh</Typography>
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Abhi" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>
                    How will you know the policy has changed?
                  </Typography>
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Yogesh" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Yogesh Yadav</Typography>
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Preeti" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Preeti Thakur</Typography>
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Rohit" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Rohit Singh</Typography>
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Rohit" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Rohit Singh</Typography>
                </div>
              </Menu>

              <Notifications
                sx={{ margin: "1vh" }}
                onClick={(e) => setNotification(true)}
              />
              <Menu
                sx={{ minWidth: "20%", marginBottom: "5px" }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={notification}
                onClose={(e) => setNotification(false)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#3559E0",
                    marginTop: "-10px",
                  }}
                >
                  <Box>
                    <CloseIcon />
                  </Box>
                  <Box>
                    <Typography>
                      <b>Notifications</b>
                    </Typography>
                  </Box>
                  <Box>
                    <SettingsIcon />
                  </Box>
                </header>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Rohit" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Rohit Singh</Typography>
                  <NotificationsActiveIcon />
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Rohit" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Ansh Thakur</Typography>
                  <NotificationsActiveIcon />
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Rohit" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Mansi Singh</Typography>
                  <NotificationsActiveIcon />
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Rohit" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Devendra Singh</Typography>
                  <NotificationsActiveIcon />
                </div>
                <div style={{ display: "flex", padding: "10px" }}>
                  <Avatar alt="Rohit" src="/static/images/avatar/1.jpg" />
                  <Typography margin={1}>Rhit Singh</Typography>
                  <NotificationsActiveIcon />
                </div>
              </Menu>

              <Avatar
                sx={{ width: 30, height: 30, margin: "1vh" }}
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
              <MenuItem>My account</MenuItem>
              <MenuItem
                onClick={(e) => {
                  handleLogout();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </styledToolbar>
      </AppBar>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      > 

        <Box sx={{ width:"100%"}}>
        <Card style={{ ml: 2, width: "707px" ,margin:"5px"}} >
        <Box sx={{display:"flex",justifyContent:"space-between",margin:"5px"}}>
        <img style={{width:"8%",height:"8%",layout:"fixed",borderRadius:"50%",margin:"5px"}} src="https://e1.pxfuel.com/desktop-wallpaper/431/667/desktop-wallpaper-handsome-boy-for-fb-indian-boy-pic.jpg"
        layout="fixed"
       alt="Rohit image"/>
       <input  style={{width:"40%",textAlign:"center",borderRadius:"20px", background:"#EEF0E5",margin:"10px",backgroundColor:"white"}} type="text" placeholder={'Whats on your mind ?' }/>
        <button style={{width:"10%",margin:"5px",borderRadius:"20px",backgroundColor:"white"}}>sumbit</button>
       </Box>
       <Box sx={{display:"flex",justifyContent:"space-between",textAlign:"center",margin:"10px"}}>
       <Box sx={{margin:"8px"}}>
       <VideoCallIcon/>
       <p style={{marginTop:"-8px"}}>Live Video</p>
       </Box>
       <Box sx={{margin:"8px"}}>
       <EmojiEmotionsIcon/>
       <p style={{marginTop:"-6px"}}>Feeling/Activity</p>
       </Box>
       <Box sx={{margin:"8px"}}>
       <PhotoCameraIcon />
       <p style={{marginTop:"-6px"}}>Photo/Videos</p>
       </Box>
       </Box>
        </Card>
  
      
          <Card sx={{ ml: 2, width: "707px" }}>
            {/* 1st */}
            <CardHeader
            onClick={handleImageChange}
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  N
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                <input type="file" onChange={handleChange} />
                  <MoreVert />
                </IconButton>
              }
              title="Paradise Wildlife Park"
              subheader="Nov 30, 2023"
            /> 
           <CardMedia 
              component="img"
              height="300px"
              width="200px"
              img src={file}
            />  
              
          
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                The tiger is the largest living cat species and a member of the
                genus Panthera. It is most recognisable for its dark vertical
                stripes on orange fur with a white underside. An apex predator,
                it primarily preys on ungulates, such as deer and wild boar.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
            {/* 2nd */}
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  N
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title="Commandos"
              subheader="Nov 30, 2023"
            />
            <CardMedia
              component="video"
              height="1080px"
              width="1350px"
              image={video1}
              controls
              alt="commando"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                J&K: One Army Officer Killed, Three Elite Para Special Forces
                Soldiers Injured In An Encounter In Rajouri; One Terrorist
                Neutralised
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  N
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title="Paradise Wildlife Park"
              subheader="Nov 30, 2023"
            />
            <CardMedia
              component="img"
              height="300px"
              width="200px"
              image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9XT89rHOJLr7fOg3wSlQLss0SVKd11QLerGhgXq2ZBB2IGGN1"
              alt="Tiger"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                The tiger is the largest living cat species and a member of the
                genus Panthera. It is most recognisable for its dark vertical
                stripes on orange fur with a white underside. An apex predator,
                it primarily preys on ungulates, such as deer and wild boar.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  N
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title="Commandos"
              subheader="Nov 30, 2023"
            />
            <CardMedia
              component="video"
              height="1080px"
              width="1350px"
              image={video1}
              controls
              alt="commando"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                J&K: One Army Officer Killed, Three Elite Para Special Forces
                Soldiers Injured In An Encounter In Rajouri; One Terrorist
                Neutralised
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
        <Box position={"fixed"}
          sx={{ marginLeft: "53%", backgroundColor: "#white", width: "20%",padding:"1%" }}
        >
          <center>
            <CardMedia
              style={{
                borderRadius: "100%",
                width: "50%",
                textalign: "center",
                justifycontent: "center",
                alignitems: "center",
              }}
              component="img"
              height="156vh"
              image="https://e1.pxfuel.com/desktop-wallpaper/431/667/desktop-wallpaper-handsome-boy-for-fb-indian-boy-pic.jpg"
            />
          </center>
          <center>
            <h2>Rohit Singh</h2>
          </center>
          <hr></hr>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <WorkIcon />
            <Typography>Studied at Dr Roy public School</Typography>
          </Box>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <WorkIcon />
            <Typography>Studied at Dr Roy public School</Typography>
          </Box>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <WorkIcon />
            <Typography>Studied at M.com </Typography>
          </Box>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <WorkIcon />
            <Typography>Studied at B.Com </Typography>
          </Box>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <WorkIcon />
            <Typography>Studied at Noida University</Typography>
          </Box>
          <br />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AddLocationAltIcon  sx={{marginLeft:"0%"}}/>
            <Typography> From Agra, Uttar Pradesh</Typography>
          </Box><br/>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <HomeIcon sx={{marginLeft:"0%"}}/>
          <Typography> Lives in Noida</Typography>
        </Box>
          <hr></hr>
          <center><h2>Contact info </h2></center>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <LocalPhoneIcon sx={{marginLeft:"0%"}}/>
          <Typography>7813457680</Typography> Mobile
        </Box>
        <hr/>
        <center><h2>Basic info</h2></center>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ManIcon sx={{marginLeft:"0%"}}/>
        <Typography>Male</Typography> Gender
      </Box><hr/>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CakeIcon sx={{marginLeft:"0%"}}/>
      <Typography>February 6, 2000</Typography> birthday
    </Box><hr/>
        </Box>
      </div>
    </div>
  );
};
export default Navbar;
