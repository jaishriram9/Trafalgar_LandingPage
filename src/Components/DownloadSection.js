import React from "react";
import { Typography, Grid } from "@mui/material";
import DownloadImage from "../assets/Images/Download.png";
import downloadIcon from "../assets/Images/downloadIcon.png";

const DownloadSection = () => {
  return (
    <Grid
      id="Apps"
      container
      xs={12}
      mt={10}
      sx={{ p: { xs: 3, sm: 5, md: 8 }, flexWrap: { xs: "wrap-reverse" } }}
      id='Apps'
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={5}
        // border="1px solid red"
        justifyContent={"center"}
      >
        <Typography
          sx={{ fontSize: { xs: 28, sm: 36, md: 44, lg: 48 } }}
          style={{ fontFamily: "Mulish", fontWeight: "700", color: "black" }}
        >
          Download our mobile apps
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 18, md: 21, lg: 21 },
            padding: { xs: 1, sm: 2 },
          }}
          style={{
            fontFamily: "Mulish",
            fontWeight: "300",
            color: "#7D7987",
          }}
        >
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </Typography>
        <Grid
          item
          container
          flexDirection={"row"}
          justifyContent={"center"}
          xs={6}
          sm={5}
          md={4}
          sx={{
            px: { xs: 1, sm: 2 },
            py: 1,
            border: "1px solid #458FF6",
            borderRadius: 20,
          }}
        >
          <Typography sx={{ color: "#458FF6" }}>Download</Typography>

          <img
            src={downloadIcon}
            alt="downloadicon"
            style={{
              width: "10px",
              height: "12px",
              marginLeft: 3,
              marginTop: 5,
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <img
          src={DownloadImage}
          alt="ServiceSectionImage"
          style={{ minWidth: "99%", maxWidth: "99%" }}
        />
      </Grid>
    </Grid>
  );
};

export default DownloadSection;
