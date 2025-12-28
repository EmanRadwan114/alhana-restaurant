import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import heroImg from "../../assets/meal.png";
import heroImg2 from "../../assets/meal2.png";
import heroImg3 from "../../assets/meal3.png";
import { Link } from "react-router";

export default function Hero() {
  return (
    <>
      <Box
        component="header"
        sx={{
          backgroundColor: green[50],
          padding: "150px 0 60px 0",
        }}
      >
        <Container
          fixed
        >
          <Grid
            container
            spacing={10}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* heading */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "600",
                  color: "#27302f",
                  lineHeight: "1.5",
                  marginBottom: "15px",
                }}
              >
                Enjoy Delicious{" "}
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.3rem" },
                    color: "#E84929",
                    fontWeight: "600",
                  }}
                >
                  Food
                </Typography>{" "}
                With Us
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{ color: "#27302f", marginBottom: "25px" }}
              >
                Where every meal should be a celebration of flavor and
                nutrition. We believe that food should excite your taste buds,
                fuel your body, and bring people together.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  backgroundColor: "#E84929",
                  marginBottom: "30px",
                }}
                component={Link}
                to="/meals"
              >
                Discover Our Plates
              </Button>

              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "#E84929",
                }}
              >
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    color: "#27302f",
                  }}
                >
                  Opening Hours:{" "}
                </Typography>
                2 pm - 1 am everyday
              </Typography>
            </Grid>

            {/* img */}
            <Grid size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
              <Grid container>
                <Grid size={6}>
                  <Box
                    sx={{
                      backgroundColor: "#E84929",
                      padding: "5px",
                      width: "70%",
                      borderRadius: "50%",
                      boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.5)",
                    }}
                  >
                    <img src={heroImg} alt="restaurant plate" width="100%" />
                  </Box>
                </Grid>
                <Grid size={6}>
                  <Box
                    sx={{
                      backgroundColor: "#E84929",
                      padding: "0px",
                      width: "45%",
                      height: "70%",
                      borderRadius: "50%",
                      boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.5)",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={heroImg2}
                      alt="restaurant plate"
                      width="100%"
                      style={{ transform: "translateY(-8%)" }}
                    />
                  </Box>
                </Grid>
                <Grid offset={5} size={6}>
                  <Box
                    sx={{
                      backgroundColor: "#E84929",
                      width: "60%",
                      height: "85%",
                      borderRadius: "50%",
                      boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.5)",
                      textAlign: "end",
                    }}
                  >
                    <img
                      src={heroImg3}
                      alt="restaurant plate"
                      width="120%"
                      style={{ transform: "translate(-5%, -3%)" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
