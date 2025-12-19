import Meals from "../../components/Meals/Meals";
import Box from "@mui/material/Box";
import Banner from "../../components/SharedComponents/Banner";

export default function AllMeals() {
  return (
    <Box sx={{ padding: "50px 0" }}>
      <Banner
        heroImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="Discover Our Delicious Meals"
        desc="Handcrafted with premium ingredients and authentic flavors"
      ></Banner>
      <Meals
        array={[
          "all",
          "soup",
          "main course",
          "pizza",
          "shawerma",
          "burger",
          "salads",
          "appetizers",
          "desserts",
        ]}
        val={"all"}
      ></Meals>
    </Box>
  );
}
