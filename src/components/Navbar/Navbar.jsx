import { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Container
} from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import logo from "../../assets/logo-white-bg.png";
import { green } from "@mui/material/colors";
import { GlobalContext } from "../../context/GlobalContext";

const drawerWidth = 240;

const navLinks = [
  { text: "Home", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Meals", icon: <RestaurantMenuOutlinedIcon />, path: "/meals" },
  { text: "About", icon: <InfoOutlinedIcon />, path: "/about" },
  { text: "Contacts", icon: <ContactsOutlinedIcon />, path: "/contacts" },
];

function Navbar(props) {
  const { window } = props;
  const { isAtTop } = useContext(GlobalContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ p: 2 }}>
        <NavLink to="/">
          <img src={logo} alt="AlHana Logo" width="60%" />
        </NavLink>
      </Box>
      <Divider />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.path} disablePadding>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#E84929" : "#27302f",
                width: "100%",
              })}
            >
              <ListItemButton sx={{ textAlign: "left" }}>
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        top: 0,
        zIndex: 10000,
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor:
            pathname === "/" && isAtTop
              ? green[50]
              : !isAtTop
              ? "white"
              : "white",
          color: "#27302f",
          transition: "background-color 0.3s ease",
          boxShadow:
            pathname === "/" && isAtTop
              ? "none"
              : !isAtTop
              ? "0 0 10px 0 rgb(157, 161, 161, 0.6)"
              : "",
          padding: { lg: "0 100px" },
        }}
      >
        <Container>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Center section: Logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              padding: 0,
              marginTop: "5px",
            }}
          >
            <NavLink to="/">
              <img src={logo} alt="logo" width="120px" />
            </NavLink>
          </Box>

          {/* Center NavLinks from md and up */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              gap: 3,
              alignItems: "center",
            }}
          >
            {navLinks.map((item) => (
              <Box
                sx={{
                  position: "relative",
                  "&:after": {
                    content: "''",
                    position: "absolute",
                    width: "0%",
                    height: "3px",
                    borderRadius: "5px",
                    left: "0",
                    bottom: "-5px",
                    backgroundColor: "#E84929",
                    transition: "width 500ms",
                    cursor: "pointer",
                  },
                  "&:hover": {
                    "&:after": { width: "100%" },
                  },
                }}
                key={item.path}
              >
                <NavLink
                  key={item.text}
                  to={item.path}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "600" : "500",
                    color: isActive ? "#E84929" : "#27302f",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                  })}
                >
                  {item.text}
                </NavLink>
              </Box>
            ))}
          </Box>

          {/* Left section: Menu icon on small screens */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton edge="start" onClick={handleDrawerToggle}>
              <MenuIcon sx={{ fontSize: "1.8rem" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

      {/* Drawer */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          anchor="right"
          sx={{
            display: { xs: "block", md: "none" },
            zIndex: 1000000,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
