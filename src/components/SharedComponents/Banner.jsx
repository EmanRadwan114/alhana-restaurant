import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Banner = ({ heroImage, title, desc }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
        minHeight: "60vh",
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark overlay
          },
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            color: "white",
            py: 6,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "600",
              lineHeight: "1.5",
              marginBottom: "15px",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{
              mb: 4,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              opacity: 0.9,
            }}
          >
            {desc}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
