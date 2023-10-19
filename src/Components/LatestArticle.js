import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import DiseaseImage from "../../src/assets/Images/disease.png";
import Herbal from "../../src/assets/Images/herbal.png";
import faceImage from "../../src/assets/Images/face.png";

const cardsData = [
  {
    url: DiseaseImage,
    name: "Disease detection, check up in the laboratory",
    desc: "In this case, the role of the health laboratory is very important to do a disease detection...",
  },

  {
    url: Herbal,
    name: "Herbal medicines that are safe for consumption",
    desc: "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    url: faceImage,
    name: "Natural care for healthy facial skin",
    desc: "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
];

const LatestArticle = () => {
  return (
    <Grid container xs={12} justifyContent={"center"} id="apps">
      <Grid item container xs={12} sm={8} p={4} justifyContent={"center"}>
        <Typography
          sx={{ fontSize: { xs: "28px", sm: "34px", md: "36px" } }}
          style={{ color: "black", fontFamily: "Mulish", fontWeight: "700" }}
        >
          Check out our latest article
        </Typography>
      </Grid>
      <Grid container xs={12} sx={{ px: { xs: 4, sm: 2, md: 10 } }}>
        {cardsData.map((item) => (
          <Grid item xs={12} sm={4} md={4} my={2}>
            <Card
              sx={{
                maxWidth: "95%",
                borderRadius: 5,
                maxHeight: 512,
                backgroundColor: "white",
              }}
            >
              <CardMedia
                component="img"
                alt={item.name}
                maxHeight="140"
                image={item.url}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: 16, sm: 15, md: 18, lg: 18 },
                    fontFamily: "Mulish",
                    overflow: "hidden",
                    px: { xs: 0, sm: 0, md: 2, lg: 2 },
                    maxHeight: 65,
                  }}
                  variant="h5"
                  component="div"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    fontWeight: "300",
                    fontSize: { xs: 12, md: 16 },
                    fontFamily: "Mulish",
                    color: "#7D7987",
                    marginTop: 2,
                    px: { xs: 2, sm: 0, md: 2 },
                    maxHeight: 94,
                  }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid
                  item
                  sx={{
                    textTransform: "capitalize",
                    px: 3,
                    backgroundColor: "white",
                    color: "#4089ED",
                    fontWeight: "600",
                    fontSize: 16,
                    fontFamily: "Mulish",
                  }}
                >
                  Read More
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} justifyContent={"center"}>
        <Grid
          container
          item
          xs={4}
          sm={3}
          md={2}
          justifyContent={"center"}
          py={0.5}
          border="1px solid #458FF6"
          borderRadius="20px"
        >
          <Typography
            sx={{
              color: "#458FF6",

              textTransform: "capitalize",
            }}
          >
            View All
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LatestArticle;
