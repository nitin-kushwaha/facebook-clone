import React, { useState } from "react";
import { Box } from "@mui/material";
import {Button} from "@mui/material";
import {CardMedia} from "@mui/material";
import { Link } from "react-router-dom";
const Home= () => {
  const divStyle = {
    display:"flex",
    height:"40%",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    background:"#C5FFF8",
    marginLeft:"28%",
    marginRight:"30%",
    boxShadow: '3px 5px 9px #F4AAB9',
    marginTop:"10%",
  }
    
  const divStyles = {
    color:"#711DB0",
  }
  return (
    <Box style={divStyle}>
    <form action="" style={{justifyContent:"center"}} >
      <h2 style={divStyles}><b>Create new account </b></h2>
      <div style={{ padding: "10px", textAlign:"center"}}>
        <label  style={{ color:"#B0A695"}} htmlFor="email"> Email</label>
        <input style={{width:"100%",border:"60px",padding:"8px", margin:"5px"}}
          type="text"
          name="email"
          id="email"
          onChange={(e) => {
          
          }}
        ></input>
      </div>
      <div style={{ padding: "10px",  textAlign:"center" }}>
        <label style={{color:"#B0A695"}} htmlFor="password">Password</label>
        <input style={{width:"100%",border:"60px",padding:"8px", margin:"5px"}}
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
          }}
        ></input>
      </div>
      <Button style={{margin:"20px"}} variant="contained">Login</Button>
      <Link style={{display:"flex",padding:"5px",marginLeft:"10vh"}}>Forgot Password ?</Link>
    </form>
    <div style={{display:"flex", margin:"3%"}}>
    <CardMedia style={{borderRadius:"45px",marginLeft:"10px"}}
    component="img"  
    height="166vh"
    image="https://www.divami.com/blog/wp-content/uploads/2021/07/11-Actionable-Tips-to-Design-the-Best-Login-Page.png"/>
    </div>
  </Box>
    
  );
};
export default Home;
