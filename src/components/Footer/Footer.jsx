import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MyLink from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router";
import logo from "../../assets/logo-white-bg.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        color: "#ffffff",
        padding: { xs: "50px 30px", lg: "50px 100px" },
        mt: "auto",
      }}
    >
      <Grid container spacing={4} alignItems="start">
        {/* Company Info */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <img src={logo} alt="AlHana logo" width="180px" />
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
            Serving premium quality food since 2010. Our passion for authentic
            flavors and fresh ingredients makes every dish special.
          </Typography>
          <Box sx={{ display: "flex", gap: { xs: "3px" }, mt: 2 }}>
            <IconButton aria-label="Facebook" sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" sx={{ color: "white" }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          sx={{ textAlign: "center", marginTop: "50px" }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#E84929" }}
          >
            Quick Links
          </Typography>
          <MyLink
            component={Link}
            to="/"
            color="inherit"
            underline="hover"
            display="block"
            mb={1}
          >
            Home
          </MyLink>
          <MyLink
            component={Link}
            to="/menu"
            color="inherit"
            underline="hover"
            display="block"
            mb={1}
          >
            Menu
          </MyLink>
          <MyLink
            component={Link}
            to="/about"
            color="inherit"
            underline="hover"
            display="block"
            mb={1}
          >
            About Us
          </MyLink>
          <MyLink
            component={Link}
            to="/contacts"
            color="inherit"
            underline="hover"
            display="block"
          >
            Contact
          </MyLink>
        </Grid>

        {/* Contact Info */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ marginTop: "50px" }}>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#E84929" }}
          >
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LocationOnIcon sx={{ mr: 1, fontSize: "small" }} />
            <Typography variant="body2">
              District 4, Tiba Market, 6 October City, Egypt.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <PhoneIcon sx={{ mr: 1, fontSize: "small" }} />
            <Typography variant="body2">+20 100 123 4567</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ mr: 1, fontSize: "small" }} />
            <Typography variant="body2">info@AlHana.com</Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.1)" }} />

      <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} AlHana All rights reserved.
        <br />
      </Typography>
    </Box>
  );
};

export default Footer;
