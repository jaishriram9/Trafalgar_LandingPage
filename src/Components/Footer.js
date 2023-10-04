import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "../assets/Images/bg.png";
import Ellipse from "../assets/Images/Ellipse 8.png";

const Footer = () => {
  return (
    <Grid container my={20}>
      <Grid
        item
        container
        style={{
          background: `url(${Image})`,
          backgroundSize: "100% 100%",
          minHeight: "432px",
          maxHeight: "110vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={5} md={4}>
          <Grid
            item
            container
            style={{ height: "100px", marginTop: 20, paddingLeft: 20 }}
          >
              <Typography
                style={{
                  color: "#5B9BF3",
                  fontSize: 28,
                  fontWeight: "700",
                  fontFamily: "Mulish",
                  position: "relative",
                  top: 50,
                  left: 50,
                }}
              >
                T
              </Typography>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ height: { xs: "90%", sm: "100%" } }}
              style={{
                background: `url(${Ellipse})`,
                backgroundRepeat: "no-repeat",
                width: "41vh",
              }}
            >
            
            </Grid>
            <Typography
              style={{
                color: "white",
                fontFamily: "Mulish",
                fontSize: 24,
                fontWeight: "700",
                marginTop: 10,
              }}
            >
              Trafalgar
            </Typography>
          </Grid>
          <Typography
            sx={{ mt: { xs: 2 }, px: { xs: 2, sm: 0 } }}
            style={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Typography>
          <Typography
            sx={{
              mt: { xs: 2, sm: 5 },
              mb: { xs: 2, sm: 0 },
              px: { xs: 2, sm: 0 },
            }}
            style={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            ©Trafalgar PTY LTD 2020. All rights reserved
          </Typography>
        </Grid>
        <Grid
          item
          justifyContent={"center"}
          xs={6}
          sm={2}
          md={2}
          sx={{ px: { xs: 5, sm: 0 } }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Company
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Testimonials
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Find a doctor
          </Typography>
          {/* <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Apps
          </Typography> */}
        </Grid>
        <Grid item xs={6} sm={2} md={2} sx={{ px: { xs: 5, sm: 0 } }}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Region
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Indonesia
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Hongkong
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Singapore
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Canada
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2} md={2} sx={{ px: { xs: 5, sm: 0 } }}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Help
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Help Center
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Contact Support
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Instructions
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mulish",
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            how It Works
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
