import React, { useState, useRef, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Logo from "../assets/Images/Ellipse.png";
import MenuIcon from "@mui/icons-material/Menu";
const navItems = ["Home", "Services", "Apps", "Testimonials", "About Us"];
const drawerWidth = 260;

const Header = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const scrollRef = useRef();

  // const handleScroll = (id) => {
  //   console.log("id>>>>", id);
  //   let element = document.getElementById(id);
  //   window.scrollTo({
  //     top: element.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  const handleDrawerState = () => {
    setMobileDrawer(!mobileDrawer);
  };

  const drawerMobile = (
    <Box component={"nav"} onClick={() => handleDrawerState()}>
      <Grid container item xs={5} sm={3} md={3} lg={3} xl={3}>
        <Grid
          item
          xs={4}
          sm={2}
          md={2}
          my={2}
          mx={2}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={2} xl={2} mx={-1} my={2}>
          <Typography
            sx={{ fontSize: { xs: 22, md: 24, lg: 24 } }}
            style={{
              color: "#233348",
              fontFamily: "Mulish",
              fontWeight: "700",
            }}
          >
            Trafalgar
          </Typography>
        </Grid>
      </Grid>
      <Divider />

      <Grid
        container
        item
        sx={{ display: { xs: "block", sm: "none" } }}
        sm={12}
        md={12}
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          position: "sticky",
          top: 0,
          left: 0,
          background: "white",
        }}
      >
        {navItems.map((item, index) => (
          <Grid
            container
            item
            xs={12}
            my={3}
            justifyContent={"center"}
            sx={{ fontSize: { xs: "1.2rem" } }}
            style={{
              color: "#1F1534",
              fontWeight: "400",
              fontFamily: "Mulish",
            }}
            // onClick={() => handleScroll(item)}
          >
            <a
              style={{ textDecoration: "none" }}
              href={`#${item.replaceAll(" ", "-").toLocaleLowerCase()}`}
            >
              {item}
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <>
      <Grid
        container
        xs={12}
        sm={12}
        lg={12}
        xl={12}
        justifyContent={"space-between"}
        padding={"20px 20px"}
        position={"sticky"}
        top={0}
        left={0}
        sx={{ background: "white" }}
      >
        <Grid container item xs={5} sm={3} md={3} lg={3}>
          <Grid item xs={3} sm={2} md={2} lg={2}>
            <a href="#home">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "100%", height: "95%" }}
              />
            </a>
          </Grid>
          <Grid
            item
            xs={3}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            mx={1}
            sx={{ my: { xs: 0, sm: 0, md: 1 } }}
          >
            <Typography
              sx={{ fontSize: { xs: 22, md: 24, lg: 24 } }}
              style={{
                color: "#233348",
                fontFamily: "Mulish",
                fontWeight: "700",
              }}
            >
              Trafalgar
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={4}
          sm={9}
          md={9}
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          {navItems.map((item) => (
            <Grid
              container
              item
              xs={2}
              sm={2}
              id={item}
              // onClick={() => handleScroll(item)}
              justifyContent={"center"}
              sx={{
                fontSize: { sm: ".9rem", md: "1.2rem" },
                display: { xs: "none", sm: "flex" },
              }}
              style={{
                color: "#1F1534",
                fontWeight: "400",
                fontFamily: "Mulish",
              }}
            >
              <a
                style={{ textDecoration: "none" }}
                href={`#${item.replaceAll(" ", "-").toLocaleLowerCase()}`}
              >
                {item}
              </a>
            </Grid>
          ))}
          <Grid
            item
            container
            onClick={() => handleDrawerState()}
            xs={2}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon style={{ color: "#458FF8" }} />
          </Grid>
        </Grid>
      </Grid>
      <Box component={"nav"}>
        <Drawer
          open={mobileDrawer}
          variant="temporary"
          onClose={() => setMobileDrawer(!mobileDrawer)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerMobile}
        </Drawer>
      </Box>


     
    </>
  );
};

export default Header;
