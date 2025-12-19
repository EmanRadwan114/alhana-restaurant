import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useTheme,
  useMediaQuery,
  Chip,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import {
  Restaurant as RestaurantIcon,
  LocalDining as LocalDiningIcon,
  Favorite as FavoriteIcon,
  Groups as GroupsIcon,
  EmojiEvents as EmojiEventsIcon,
  CalendarToday,
  MenuBook,
} from "@mui/icons-material";
import { green, grey } from "@mui/material/colors";
import { Link } from "react-router";

// Banner Component (assuming you have this)
const Banner = ({ heroImage, title, desc }) => (
  <Box
    sx={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
    }}
  >
    <Container>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", sm: "3.5rem" },
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
        }}
      >
        {desc}
      </Typography>
    </Container>
  </Box>
);

const About = () => {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  // Responsive image sizes
  const getImageHeight = () => {
    if (isSmallMobile) return 250;
    if (isMobile) return 350;
    if (isTablet) return 400;
    return 500;
  };

  // High-quality Unsplash images
  const images = {
    hero: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    interior:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    philosophy:
      "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    chef1:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    chef2:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    chef3:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  };

  const stats = [
    {
      icon: <LocalDiningIcon fontSize="large" />,
      value: "200+",
      label: "Menu Items",
    },
    {
      icon: <GroupsIcon fontSize="large" />,
      value: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      value: "15",
      label: "Awards Won",
    },
    {
      icon: <RestaurantIcon fontSize="large" />,
      value: "8",
      label: "Years Serving",
    },
  ];

  return (
    <Box sx={{ padding: 0 }}>
      <Banner
        heroImage={images.hero}
        title="Our Story"
        desc="Passion for food, love for community"
      />

      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        {/* Our Story Section */}
        <Container sx={{ py: isMobile ? 4 : 8 }}>
          <Grid container spacing={isMobile ? 3 : 6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#E84929",
                  mb: isMobile ? 2 : 4,
                }}
              >
                About AlHana
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  mb: isMobile ? 2 : 3,
                }}
              >
                Founded in 2015, AlHana began as a small family-owned bistro
                with a simple mission: to serve delicious, high-quality food
                made with locally-sourced ingredients.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  mb: isMobile ? 2 : 3,
                }}
              >
                What started as a humble 10-table restaurant has grown into one
                of the city's most beloved dining destinations, known for our
                innovative menu and warm hospitality.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  mb: isMobile ? 3 : 4,
                }}
              >
                At AlHana, we believe that great food brings people together.
                Every dish tells a story, and we're honored to be part of your
                special moments.
              </Typography>
              <Box
                direction="row"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: isMobile ? "center" : "flex-start",
                  gap: "10px",
                }}
              >
                <Chip
                  icon={
                    <FavoriteIcon fontSize={isMobile ? "small" : "medium"} />
                  }
                  label="Locally Sourced"
                  sx={{
                    marginBottom: "5px",
                    width: "45%",
                    px: isMobile ? 1 : 2,
                    py: isMobile ? 0.5 : 1,
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    borderRadius: "4px",
                    color: "#E84929",
                  }}
                />
                <Chip
                  icon={
                    <RestaurantIcon fontSize={isMobile ? "small" : "medium"} />
                  }
                  label="Seasonal Menus"
                  sx={{
                    marginBottom: "5px",
                    width: "45%",
                    px: isMobile ? 1 : 2,
                    py: isMobile ? 0.5 : 1,
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    borderRadius: "4px",
                    color: green[800],
                  }}
                />
                <Chip
                  icon={
                    <LocalDiningIcon fontSize={isMobile ? "small" : "medium"} />
                  }
                  label="Sustainable"
                  sx={{
                    marginBottom: "5px",
                    width: "92%",
                    px: isMobile ? 1 : 2,
                    py: isMobile ? 0.5 : 1,
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    borderRadius: "4px",
                    color: "#27302f",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              order={{ xs: 1, md: 2 }}
              sx={{ mb: isMobile ? 3 : 0 }}
            >
              <Card
                elevation={isMobile ? 3 : 6}
                sx={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: isMobile ? "none" : "scale(1.02)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={getImageHeight()}
                  image={images.interior}
                  alt="AlHana Restaurant Interior"
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Stats Section */}
        <Box
          sx={{
            backgroundColor: green[100],
            color: "#27302f",
            py: isMobile ? 6 : 8,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "20px",
              background: green[100],
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "20px",
              background: green[100],
            },
          }}
        >
          <Container>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              align="center"
              gutterBottom
              sx={{
                mb: isMobile ? 4 : 6,
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              AlHana By The Numbers
            </Typography>
            <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: isMobile ? 2 : 3,
                      borderRadius: "8px",
                      backgroundColor: grey[200],
                      transition: "all 0.3s",
                      height: "100%",
                      "&:hover": {
                        transform: isMobile ? "none" : "translateY(-5px)",
                        backgroundColor: "rgba(255,255,255,0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: "#E84929",
                        mb: isMobile ? 1 : 2,
                        "& svg": {
                          fontSize: isMobile ? "2rem" : "2.5rem",
                        },
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant={isMobile ? "h5" : "h4"}
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        mb: isMobile ? 0.5 : 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant={isMobile ? "subtitle2" : "h6"}
                      sx={{ opacity: 0.9 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Philosophy Section */}
        <Box
          sx={{
            backgroundColor: theme.palette.grey[100],
            py: isMobile ? 6 : 10,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "20px",
            },
          }}
        >
          <Container>
            <Grid
              container
              spacing={isMobile ? 3 : 6}
              alignItems="center"
              direction={isMobile ? "column-reverse" : "row"}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  elevation={isMobile ? 1 : 0}
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: isMobile ? theme.shadows[2] : theme.shadows[4],
                  }}
                >
                  <CardMedia
                    component="img"
                    height={getImageHeight()}
                    image={images.philosophy}
                    alt="Food preparation"
                    sx={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ mt: isMobile ? 3 : 0 }}>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "#E84929",
                    mb: isMobile ? 2 : 4,
                  }}
                >
                  Our Philosophy
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    mb: isMobile ? 2 : 4,
                  }}
                >
                  At AlHana, we're committed to more than just serving great
                  food. We believe in:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    pl: 0,
                    listStyle: "none",
                  }}
                >
                  {[
                    "Sustainability: We partner with local farmers and producers to reduce our environmental impact.",
                    "Innovation: Our chefs constantly experiment with flavors and techniques to surprise and delight.",
                    "Community: We're proud to be part of this neighborhood and give back through various initiatives.",
                    "Authenticity: Every dish is prepared with care and respect for its origins.",
                  ].map((item, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        mb: isMobile ? 2 : 3,
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#E84929",
                          color: "white",
                          borderRadius: "50%",
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 2,
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: isMobile ? "0.9rem" : "1.1rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Call to Action */}
        <Container
          sx={{
            py: isMobile ? 6 : 10,
            textAlign: "center",
            background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`,
            borderRadius: "12px",
            my: isMobile ? 4 : 8,
            boxShadow: theme.shadows[2],
            px: isMobile ? 3 : 4,
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#E84929",
              mb: isMobile ? 2 : 3,
            }}
          >
            Ready to Experience AlHana?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              maxWidth: "700px",
              mx: "auto",
              mb: isMobile ? 3 : 4,
              fontSize: isMobile ? "1rem" : "1.1rem",
            }}
          >
            Whether you're joining us for a casual lunch, a romantic dinner, or
            a special celebration, we promise an unforgettable dining
            experience.
          </Typography>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? 1.5 : 2}
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <Button
              component={Link}
              to="/meals"
              variant="outlined"
              size={isMobile ? "small" : "medium"}
              startIcon={<MenuBook />}
              sx={{
                px: isMobile ? 3 : 4,
                py: isMobile ? 1 : 1.5,
                fontSize: isMobile ? "0.9rem" : "1rem",
                borderRadius: "8px",
                minWidth: isMobile ? "100%" : "auto",
                color: "#E84929",
                borderColor: "#E84929",
                "&:hover": {
                  borderColor: "#d14024",
                  backgroundColor: "rgba(232, 73, 41, 0.04)",
                },
              }}
            >
              View Our Menu
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
