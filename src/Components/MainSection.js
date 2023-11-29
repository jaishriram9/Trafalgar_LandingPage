import React from "react";
import { Typography, Grid } from "@mui/material";
import MainSectionImage from "../assets/Images/header.png";

const MainSection = () => {
  return (
    <Grid container xs={12} p={4} id="home">
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={5}
        justifyContent={"center"}
      >
        <Typography
          sx={{
            fontSize: { xs: 34, sm: 36, md: 48, lg: 48 },
            padding: { xs: 1, sm: 2 },
          }}
          style={{ fontFamily: "Mulish", fontWeight: "700", color: "black" }}
        >
          Virtual healthcare for you
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 18, md: 21, lg: 21 },
            padding: { xs: 1, sm: 2 },
          }}
          style={{ fontFamily: "Mulish", fontWeight: "300", color: "#7D7987" }}
        >
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </Typography>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={6}
          sm={5}
          md={4}
          sx={{
            p: { xs: 1, md: 1 },
            fontSize: { xs: 14, sm: 18 },
            color: "white",
            backgroundColor: "#458FF6",
            borderRadius: 20,
            textTransform: "capitalize",
            fontFamily: "Mulish",
            fontWeight: "700",
          }}
        >
          Consult Today
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        //   border='1px solid black'
      >
        <img
          src={MainSectionImage}
          alt="MainSectionImage"
          style={{ maxWidth: "99%" }}
        />
      </Grid>
    </Grid>
  );
};

export default MainSection;
