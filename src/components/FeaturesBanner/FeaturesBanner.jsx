import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "@mui/material/Container";

import bannerImg from "../../assets/banner-img.jpg";
import bannerImg2 from "../../assets/banner-img2.jpg";

export default function FeaturedBanner() {
  return (
    <Box sx={{ padding: "50px 0 70px 0", backgroundColor: "#fcefea" }}>
      <Container
        fixed
        sx={{
          padding: { lg: "0 100px" },
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 15 }}
          justifyContent="space-between"
          alignItems="start"
        >
          {/* Image Section - Left */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
            <img
              src={bannerImg}
              alt="cuisin plate"
              width="100%"
              height="65%"
              style={{ borderRadius: "5px" }}
            />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                src={bannerImg2}
                alt="cuisin plate with chicken"
                width="100%"
                height="80%"
                style={{
                  borderRadius: "5px",
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  transform: "translate(15%, 65%)",
                }}
              />
            </Box>
          </Grid>

          {/* Content Section - Right */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Header */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "600",
                color: "#27302f",
                lineHeight: "1.5",
                marginBottom: "7px",
              }}
            >
              Best Food Quality
            </Typography>

            {/* Main Content */}
            <Box sx={{ marginBottom: "20px" }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: "medium",
                  marginBottom: "15px",
                  color: "#333",
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Good Food is the Basis of{" "}
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    fontWeight: "medium",
                    color: "#E84929",
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                  }}
                >
                  Genuine Happiness
                </Typography>
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#27302f",
                  marginBottom: "15px",
                  lineHeight: "1.5",
                }}
              >
                At AlHana, we believe every meal should be a celebration of
                flavor and nutrition. Our chefs source only the freshest local
                ingredients to create dishes that delight both the palate and
                the senses. From farm to table, we maintain the highest
                standards to bring you authentic, wholesome goodness in every
                bite.
              </Typography>

              {/* Features List */}
              <List disablePadding>
                <ListItem sx={{ padding: "2px 0" }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "#E84929" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Hassle-Free Ordering
"
                    secondary="98%+ Satisfied Customers"
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      color: "#333",
                    }}
                    secondaryTypographyProps={{
                      color: "#E84929",
                      fontSize: "0.85rem",
                    }}
                  />
                </ListItem>

                <ListItem sx={{ padding: "2px 0" }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "#E84929" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Farm-Fresh Ingredients"
                    primaryTypographyProps={{ color: "#333" }}
                  />
                </ListItem>

                <ListItem sx={{ padding: "2px 0" }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "#E84929" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Quality Guaranteed"
                    primaryTypographyProps={{ color: "#333" }}
                  />
                </ListItem>
              </List>
            </Box>

            {/* Footer */}
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: "#E84929",
                backgroundColor: "transparent",
                borderColor: "#E84929",
                transition: "all 300ms",
                "&:hover": {
                  backgroundColor: "#E84929",
                  borderColor: "#E84929",
                  color: "#fff",
                },
              }}
            >
              Discover Our Menu
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
