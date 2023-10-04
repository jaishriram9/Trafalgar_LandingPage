import React from "react";
import { Typography, Grid } from "@mui/material";
import Rectangle from "../assets/Images/Rectangle.png";
const CustomerSection = () => {
  return (
    <Grid container xs={12}my={8} justifyContent={'center'}>
      <Grid
        item
        xs={8}
        sm={8}
        sx={{
          background: `url(${Rectangle})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `100% 100%`,
          height: "425px",
          width: "1120px",
          justifyContent:'center',
          alignItems:"center"
        }}
      >
        <Typography sx={{fontFamily:"Mulish",fontSize:36,fontWeight:"700",color:"white"}}>
        What our customer are saying
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CustomerSection;
