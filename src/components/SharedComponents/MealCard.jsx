import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { grey } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toast } from "react-toastify";

export default function MealCard({ meal }) {

  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          backgroundColor: grey[50],
          minHeight: { sm: "450px", md: "440px", lg: "420px" },
          boxShadow: 10,
          transition: "transform 300ms",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        {/* Card Media (Image) */}
        <CardMedia
          component="img"
          height="180"
          image={meal?.image} // Replace with your image URL or import
          alt="Product Image"
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />

        {/* Card Content */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            flexGrow: 1,
          }}
        >
          {/* Product Name */}
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 600,
              marginBottom: "10px",
              color: "#27302f",
              fontSize: { xs: "0.85rem", md: "1rem" },
              cursor: "pointer",
              transition: "color 500ms",
              "&:hover": {
                color: "#E84929",
              },
            }}
          >
            {meal?.name}
          </Typography>

          {/* Rating */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "3px",
            }}
          >
            <Rating
              value={+meal?.rate}
              precision={0.5}
              readOnly
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              name="size-small"
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              {meal?.rate}
            </Typography>
          </Box>

          {/* Product Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "8px", marginBottom: "10px", fontSize: "0.9rem" }}
          >
            {meal?.description}
          </Typography>

          {/* Price and Order Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", color: "#27302f", fontSize: "0.85rem" }}
            >
              {meal?.sale_percentage
                ? +meal?.price - +meal?.price * (+meal?.sale_percentage / 100)
                : +meal?.price}
              {" EGP "}

              <span style={{ textDecoration: "line-through", color: "#888" }}>
                {meal?.sale_percentage ? `${+meal?.price} EGP` : ""}
              </span>
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              fontSize: "1rem",
              backgroundColor: "#E84929",
              marginBottom: "10px",
              marginTop: "auto",
            }}
          >
            Order
          </Button>
        </CardContent>

        
      </Card>
    </Box>
  );
}
