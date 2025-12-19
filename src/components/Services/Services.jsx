import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { green, grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import service_1 from "../../assets/service1.svg";
import service_2 from "../../assets/service2.svg";
import service_3 from "../../assets/service3.svg";
import service_4 from "../../assets/service4.svg";
import service_5 from "../../assets/service5.svg";
import service_6 from "../../assets/service6.svg";

const services = [
  {
    id: 1,
    title: "Dine-In Experience",
    description:
      "Enjoy a cozy and elegant atmosphere with our top-notch dine-in service.",
    icon: service_1,
  },
  {
    id: 2,
    title: "Takeaway & Delivery",
    description:
      "Order your favorite meals online and get them delivered fresh to your doorstep.",
    icon: service_2,
  },
  {
    id: 3,
    title: "Catering Services",
    description:
      "Perfect for parties and events – customized menus to suit your needs.",
    icon: service_3,
  },
  {
    id: 4,
    title: "Private Dining Rooms",
    description:
      "Book our private rooms for business meetings, celebrations, or intimate gatherings.",
    icon: service_4,
  },
  {
    id: 5,
    title: "Seasonal Menus",
    description:
      "Experience fresh flavors with menus curated to reflect the best seasonal ingredients.",
    icon: service_5,
  },
  {
    id: 6,
    title: "Live Cooking Shows",
    description:
      "Enjoy interactive live cooking demonstrations from our master chefs.",
    icon: service_6,
  },
];

export default function Services() {
  return (
    <>
      <Box
        component="section"
        sx={{ backgroundColor: green[50], padding: "50px 0" }}
      >
        <Container
          fixed
          sx={{
            padding: { lg: "0 100px" },
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "600",
              color: "#27302f",
              lineHeight: "1.5",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Our Services
          </Typography>

          <Grid container spacing={4}>
            {services.map((item) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.id}>
                <Paper
                  elevation={5}
                  sx={{
                    padding: "20px",
                    background: grey[100],
                    textAlign: "center",
                    minHeight: { xs: "150px", md: "250px" },
                    transition: "transform 300ms",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <img src={item.icon} alt={item.title} width="60px" />
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      fontSize: { xs: "0.85rem", md: "1rem" },
                      fontWeight: "600",
                      color: "#E84929",
                      lineHeight: "1.5",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ color: "#27302f", marginBottom: "25px" }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
