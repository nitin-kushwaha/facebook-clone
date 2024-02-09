import React, { useState } from "react";
import { Box } from "@mui/material";
import {Button} from "@mui/material";
import {CardMedia} from "@mui/material";
import { Link } from "react-router-dom";
const Logout = () => {
  const divStyle = {
    display:"flex",
    height:"50%",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    background:"#5FBDFF",
    marginLeft:"28%",
    marginRight:"30%",
    boxShadow: '3px 5px 9px #F4AAB9',
    marginTop:"10%",
    padding:"1vh",
    
  };
   
  const divStyles = {
    color:"#711DB0",
  };
  const CheckEmail =()=>{
  }
 


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] =useState([]);

const Checkmail = 'nitinkushwah'
const Checkpassword = '123123'
 
  
  const submitForm =(e) => {
    console.log('running')
  
    console.log(email,password);

    if(email === Checkmail && password === Checkpassword){
      console.log('Login successfully')
      window.location.replace("http://localhost:4000/dashboard/navbar");
    }
    else{
      console.log('error')
    }
    


    // e.preventDefault();

    // const newEntry ={email: email, password: password };
    // // let newEmail = newEntry.email;
    // // console.log(newEmail,'newEmail')
    // console.log(newEntry,'entry')
    // // setAllEntry([newEntry]);
    // console.log(allEntry)
  }
  return (
    <Box style={divStyle}>
      <form action="" style={{justifyContent:"center"}} >
        <h2 style={divStyles}><b>Login</b></h2>
        <div style={{ padding: "10px", textAlign:"center"}}>
          <label  style={{ color:"#163020"}} htmlFor="email"> Email</label>
          <input style={{width:"100%",border:"60px",padding:"8px", margin:"5px"}}
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            
            }}
          ></input>
        </div>
        <div style={{ padding: "10px",  textAlign:"center" }}>
          <label style={{color:"#163020"}} htmlFor="password">Password</label>
          <input style={{width:"100%",border:"60px",padding:"8px", margin:"5px"}}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <Button style={{margin:"20px"}} variant="contained" onClick={submitForm}>Login</Button>
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
export default Logout;
