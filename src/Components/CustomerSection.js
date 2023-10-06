import React from "react";
import { Typography, Grid } from "@mui/material";
import Rectangle from "../assets/Images/Rectangle.png";
import CutomerImage from "../assets/Images/customer.png";

const CustomerSection = () => {
  return (
    <Grid container xs={12} my={8} justifyContent={"center"}>
      <Grid
        item
        xs={10}
        sm={10}
        sx={{
          background: `url(${Rectangle})`,
          backgroundRepeat: `no-repeat`,
          borderRadius: 5,
          backgroundSize: `100% 100%`,
          height: { xs: "100vh", sm: "50vh" },
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            fontFamily: "Mulish",
            fontWeight: "700",
            color: "white",
            marginTop: "5vh",
          }}
          sx={{ fontSize: { xs: 26, sm: 32, md: 36 } }}
        >
          What our customer are saying
        </Typography>
        <Grid container item  >
          <Grid item container alignItems={"center"} justifyContent={'center'} xs={12} sm={3} md={3} >
            <img
              src={CutomerImage}
              alt="customerimage"
              style={{ borderRadius: 150, width: "96%" }}
            />
          </Grid>

          <Grid
            container
            sx={{
              alignItems: { xs: "center" },
              my: { xs: 1, sm: 0 },
              mx: { xs: 0, sm: 1 },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
            item
            xs={11}
            sm={3}
          >
            <Grid item xs={12} sm={12}>
              <Typography
                sx={{ fontSize: { xs: 16, sm: 18, md: 22 } }}
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Mulish",
                  fontWeight: "700",
                }}
              >
                Edward Newgate
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 12, sm: 16, md: 18 } }}
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Mulish",
                  fontWeight: "400",
                }}
              >
                Founder Circle
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems= 'center' xs={10} sm={5} sx={{ my: { xs: 0, sm: 0 }, mx: {xs:2,sm:1} }}>
            <Typography
              sx={{ fontSize: { xs: 16, sm: 19 } }}
              style={{
                textAlign: "justify",
                color: "white",
                fontFamily: "Mulish",
                fontWeight: "400",
              }}
            >
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomerSection;
