import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import Frame from "../assets/Images/Frame.png";
import Frame1 from "../assets/Images/Frame1.png";
import Frame2 from "../assets/Images/Frame2.png";
import Frame3 from "../assets/Images/Frame3.png";
import Frame4 from "../assets/Images/Frame4.png";
import Frame5 from "../assets/Images/Frame5.png";
import Card from "@mui/material/Card";

import ServiceImage from "../assets/Images/service1.png";

const serviceArr = [
  {
    name: "Search doctor",
    heading:
      " Choose your doctor from thousands of specialist, general, and trusted hospitals",
    image: Frame,
  },
  {
    name: "Online pharmacy",
    heading:
      "Buy your medicines with our mobile application with a simple delivery system",
    image: Frame1,
  },
  {
    name: "Consultation",
    heading:
      "Free consultation with our trusted doctors and get the best recomendations",
    image: Frame2,
  },
  {
    name: "Details info",
    heading:
      "Free consultation with our trusted doctors and get the best recomendations",
    image: Frame3,
  },
  {
    name: "Emergency care",
    heading:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
    image: Frame4,
  },
  {
    name: "Tracking",
    heading: "Track and save your medical history and health data",
    image: Frame5,
  },
];

const Services = () => {
  return (
    <Grid container xs={12}>
      <Grid container item xs={12} justifyContent={"center"}>
        <Typography
          sx={{ fontSize: { xs: 30, sm: 32, md: 36 } }}
          style={{ color: "black", fontFamily: "Mulish", fontWeight: "700" }}
        >
          Our Services
        </Typography>
      </Grid>
      <Grid container item xs={12} p={2} justifyContent={"center"}>
        <Grid item xs={10} sm={10} md={10}>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 16, md: 18 },
              textAlign: { xs: "justify", sm: "center" },
            }}
            style={{
              color: "#7D7987",
              fontFamily: "Mulish",
              fontWeight: "300",
            }}
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} sx={{ px: { sm: 10, xs: 5 } }}>
        {serviceArr.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            my={2}
          >
            <Card
              sx={{
                width: { xs: "95%", sm: "95%", md: "85%" },
                minHeight: { xs: "220px", sm: "280px", md: "280px" },
                borderRadius: 5,
              }}
            >
              <Grid item container xs={12} padding="20px 30px">
                <img
                  src={item.image}
                  alt="lens"
                  style={{ minWidth: "25%", maxWidth: "25%" }}
                />
              </Grid>
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 22, md: 24 },
                  textAlign: { xs: "center", sm: "center" },
                }}
                style={{
                  color: "black",
                  fontFamily: "Mulish",
                  fontWeight: "700",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 16, md: 16 },
                  textAlign: { xs: "justify" },
                }}
                style={{
                  color: "#7D7987",
                  fontFamily: "Mulish",
                  fontWeight: "300",
                  padding: "10px 30px",
                }}
              >
                {item.heading}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} justifyContent={"center"}>
        <Grid
          container
          item
          py={1}
          xs={6}
          sm={3}
          md={2}
          justifyContent={"center"}
          style={{ border: "1px solid #458FF6", borderRadius: 25 }}
        >
          <Typography
            sx={{ fontSize: { xs: 18, sm: 18, md: 18 } }}
            style={{
              fontFamily: "Mulish",
              fontWeight: "700",
              color: "#458FF6",
            }}
          >
            Learn More
          </Typography>
        </Grid>
      </Grid>

      {/***SERVICE 1 Section***/}

      <Grid container xs={12} mt={10} sx={{ p: { xs: 3, sm: 5, md: 8 } }}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <img
            src={ServiceImage}
            alt="ServiceSectionImage"
            style={{ minWidth: "99%", maxWidth: "99%" }}
          />
        </Grid>
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
            Leading healthcare providers
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
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </Typography>
          <Grid
            item
            xs={6}
            sm={5}
            md={4}
            sx={{
              px: { xs: 1, sm: 2 },
              py:{xs:1},
              border: "1px solid #458FF6",
              borderRadius: 20,
              marginLeft:2
            }}
          >
            <Typography
              sx={{
                textAlign:'center',
                color: "#458FF6",
                textTransform: "capitalize",
               
              }}
            >
              Learn More 
            </Typography>
           
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
