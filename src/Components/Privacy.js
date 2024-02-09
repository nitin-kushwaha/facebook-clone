import React from "react";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import abc from "../public/download2.png";
import bcd from "../public/Privacy1.png";
import privacy from "../public/Privacy2.png";
import { Box } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";

const Privacy = () => {
  return (
    <Container fixed>
      <Card sx={{ minWidth: 200, background: "#0F2167", margin: "10px", }}>
        <CardMedia sx={{ height: 400, width: 1000 }} image={abc} />
      </Card>
      <Box>
        <h1>Privacy Policy</h1>
        <h1> What is the Privacy Policy and what does it cover?</h1>
        <p>Effective from 15 June 2023</p>

        <FormControl fullWidth>
          <InputLabel id="menu">Highlights</InputLabel>
          <Select labelId="menu" id="menu-list" label="highlights">
            <MenuItem sx={{ width: "50%" }} value={1}>
              This Privacy Policy explains how we collect, use and share your
              information.
            </MenuItem>
            <MenuItem sx={{ width: "50%" }} value={2}>
              The Privacy Policy also lets you know your rights
            </MenuItem>
            <MenuItem sx={{ width: "50%" }} value={3}>
              This policy applies to what we call Meta Products, or Products.
              Our Products include Facebook
            </MenuItem>
            <MenuItem sx={{ width: "50%" }} value={4}>
              It also applies to Meta Quest if you log in with a Facebook or
              Meta account
            </MenuItem>
          </Select>
        </FormControl>

        <p>
          We at Meta want you to understand what information we collect, and how
          we use and share it. That's why we encourage you to read our Privacy
          Policy. This helps you use in the way that's right for you.
        </p>
        <p>
          In the Privacy Policy, we explain how we collect, use, share, retain
          and transfer information. We also let you know your rights. Each
          section of the Policy includes helpful examples and simpler language
          to make our practices easier to understand. We've also added links to
          resources where you can learn more about the privacy topics that
          interest you.
        </p>
        <p>
          It's important to us that you know how to control your privacy, so we
          also show you where you can manage your information in the settings of
          the Meta Products you use. You can to shape your experience.
        </p>
        <p>Read the full policy below.</p>
        <h2>What information do we collect?</h2>
        <FormControl fullWidth>
          <InputLabel id="menu">Highlights</InputLabel>
          <Select labelId="menu" id="menu-list" label="highlights">
            <MenuItem sx={{ width: "50%" }} value={1}>
              This Privacy Policy explains how we collect, use and share your
              information.
            </MenuItem>
            <MenuItem sx={{ width: "50%" }} value={2}>
              The Privacy Policy also lets you know your rights
            </MenuItem>
            <MenuItem sx={{ width: "50%" }} value={3}>
              This policy applies to what we call Meta Products, or Products.
              Our Products include Facebook
            </MenuItem>
            <MenuItem sx={{ width: "50%" }} value={4}>
              It also applies to Meta Quest if you log in with a Facebook or
              Meta account
            </MenuItem>
          </Select>
        </FormControl>
        <Card sx={{ minWidth: 200, background: "#0F2167", margin: "10px" }}>
        <CardMedia sx={{ height: 400, width: 1100 }} image={bcd} />
      </Card>
      <p>Learn more about the different cases when your information can be shared on our Products</p>
      <h2>Public content</h2>
      <h4>What content is public?</h4>
      <p>Some of your information and activity are always public. This includes your name, Facebook and Instagram username, profile picture and activity on public Facebook Pages and Groups</p>
      <p>Other content you can choose to set to Public, such as posts, photos and videos you post to your profile, stories or reels.</p>
      <h1> How do we share information with third parties?</h1>

      <FormControl fullWidth>
      <InputLabel id="menu">Highlights</InputLabel>
      <Select labelId="menu" id="menu-list" label="highlights">
        <MenuItem sx={{ width: "50%" }} value={1}>
        Advertisers who show ads on our Products
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={2}>
        •
        Businesses we hire to market our Products for us
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={3}>
        Businesses we hire to do things such as offer customer service or conduct surveys
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={4}>
        •
        Researchers who use it to do things such as innovate, advance technology or improve people's safety
        </MenuItem>
      </Select>
    </FormControl>
    
    <CardMedia sx={{ height: 400, width: 1000,margin:"10px" }} image={privacy} />
    <h1>Partners</h1>
    <h3>Advertisers and Audience Network publishers</h3>
    <FormControl fullWidth>
      <InputLabel id="menu">Highlights</InputLabel>
      <Select labelId="menu" id="menu-list" label="highlights">
        <MenuItem sx={{ width: "50%" }} value={1}>
        Meta also provides advertisers and their vendors with information about:
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={2}>
        Ads that people engaged with, if any
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={3}>
        When people engaged with ads
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={4}>
        Where that ad was shown (e.g. on Instagram or Facebook)
        </MenuItem>
      </Select>
    </FormControl>
     <h2>Partners who use our analytics services</h2>
    <FormControl fullWidth>
      <InputLabel id="menu">Highlights</InputLabel>
      <Select labelId="menu" id="menu-list" label="highlights">
        <MenuItem sx={{ width: "50%" }} value={1}>
        How many people interacted with our partners' content, products or services
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={2}>
        People rely on our , such as business accounts, professional tools and Facebook Pages, to run and promote their businesses.
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={3}>
        How many people interacted with our partners' content, products or services
        </MenuItem>
        <MenuItem sx={{ width: "50%" }} value={4}>
        Where that ad was shown (e.g. on Instagram or Facebook)
        </MenuItem>
      </Select>
    </FormControl>
    <h1>Service providers</h1>

    <FormControl fullWidth>
    <InputLabel id="menu">Highlights</InputLabel>
    <Select labelId="menu" id="menu-list" label="highlights">
      <MenuItem sx={{ width: "50%" }} value={1}>
      Investigating suspicious activity
      </MenuItem>
      <MenuItem sx={{ width: "50%" }} value={2}>
      Detecting and stopping threats to our personnel and property
      </MenuItem>
      <MenuItem sx={{ width: "50%" }} value={3}>
      Providing technical infrastructure services
      </MenuItem>
      <MenuItem sx={{ width: "50%" }} value={4}>
      Marketing and promoting our products
      </MenuItem>
    </Select>
  </FormControl>

  <h1>Other third parties</h1>
  <p>We also share information with other  in response to legal requests, to comply with applicable law or to prevent harm. </p>
  <p>And if we sell or transfer all or part of our business to someone else, in some cases we'll give the new owner your information as part of that transaction, but only as the law allows.</p>
  <h3>Why we share across the Meta Companies</h3>
  <p>Meta Products share information with other Meta Companies:</p>
  <p>To promote safety, security and integrity and comply with applicable laws</p>
  <p>To personalise offers, ads and other sponsored or commercial content</p>
  <p>To develop and provide features and integrations</p>
  <p>To understand how people use and interact with Meta Company Products</p>
  <h1>Delete your information or account</h1>

  <FormControl fullWidth>
  <InputLabel id="menu">Highlights</InputLabel>
  <Select labelId="menu" id="menu-list" label="highlights">
    <MenuItem sx={{ width: "50%" }} value={1}>
    If you request that we delete your account or content, it may take up to 90 days to delete your information..
    </MenuItem>
    <MenuItem sx={{ width: "50%" }} value={2}>
    After the information is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery.
    </MenuItem>
    <MenuItem sx={{ width: "50%" }} value={3}>
    If you leave your deleted content in your recycle bin on Facebook or your Recently deleted..
    </MenuItem>
    <MenuItem sx={{ width: "50%" }} value={4}>
    Marketing and promoting our products
    </MenuItem>
  </Select>
</FormControl>

<h1>How will you know the policy has changed?</h1>

<p>We'll notify you before we make material changes to this Policy. You'll have the opportunity to review the revised Policy before you choose to continue using our products.</p>

<h1>How to contact Meta with questions</h1>
<h2>Why and how we process your information</h2>
<p>The categories of information we use, and why and how information is processed, are set out below:</p>

      </Box>
    </Container>
  );
};
export default Privacy;
