import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import xyz from '../public/download1.png'

const SimpleContainer = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const itemData = [
    {
      img: "https://mahadevphoto.com/wp-content/uploads/2023/02/FB_IMG_1675861481810.jpg",
      title: "Mahadev",
    },
    {
      img: "https://static.tnn.in/photo/99984835/99984835.jpghttps://static.tnn.in/photo/99984835/99984835.jpg",
      title: "Mahadev",
    },
    {
      img: "https://e1.pxfuel.com/desktop-wallpaper/732/760/desktop-wallpaper-kedarnath-full-screen-kedarnath.jpg",
      title: "Mahadev",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/534/827/HD-wallpaper-kedarnath-cloud-sky.jpg",
      title: "Mahadev",
    },
    {
      img: "https://vrindavan.theworthworld.com/wp-content/uploads/2023/06/1686726208334-1.jpg",
      title: "Mahadev",
    },
    {
      img: "https://brajvrindavanyatra.com/wp-content/uploads/2023/07/f56f2fc29e60729adb915f32bd8db8ae.jpg",
      title: "Mahadev",
    },
    {
      img: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/04/a3a8b93888170bc35d000fbadbdebf95ff207.jpg",
      title: "Mahadev",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Banke_Bihari_Vrindavan.jpg",
      title: "Mahadev",
    },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Card sx={{minWidth:200,background:"#E26EE5",margin:"10px"}}>
      <CardMedia
            sx={{height: 400, width:1000,}}
            image={xyz}
        
          />
      </Card>
        <Box sx={{ bgcolor: "#white", height: "100%" }}>
          <Box>
            <h1 style={{ textAlign: "center" }}>My Photos</h1>
            <hr />
            <h2>PORTFOLIO</h2>
            <p>Resize the browser window to see the responsive effect</p>
            <ImageList
              sx={{ width: 1000, height: 850 }}
              variant="quilted"
              cols={4}
              rowHeight={400}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <h2>Places</h2>
          <Box>
            <ImageList
              sx={{
                width: 1000,
                height: 950,
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: "translateZ(0)",
              }}
              rowHeight={400}
              gap={1}
            >
              {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img
                      {...srcset(item.img, 250, 200, rows, cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={`star ${item.title}`}
                        >
                          <StarBorderIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Box>
          <h2>Related topics</h2>
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Card sx={{ maxWidth: 300 }}>
            <CardMedia
            sx={{ height: 200, width:300}}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjQA8DnMemvaaPzpuvIAWbEmQO7dNVCCmfQ&usqp=CAU"
            title="green iguana"
          />
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default SimpleContainer;
