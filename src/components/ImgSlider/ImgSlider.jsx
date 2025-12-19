import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./ImgSlider.module.css";
import { Autoplay, EffectCards } from "swiper/modules";
import { Paper, Typography, Container, Grid, Box, Rating } from "@mui/material";
import { green } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import mealsServices from "../../services/mealsServices";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../SharedComponents/Loading";

export default function ImgSlider() {
  // 1. Fetch Reviews (using the same structure as Meals: { data, pages })
  const { data: reviewsData, isLoading: isReviewsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: mealsServices.getSampleReviews,
  });

  // 2. Fetch All Meals (to avoid multiple ID-based requests)
  const { data: mealsData, isLoading: isMealsLoading } = useQuery({
    queryKey: ["all-meals-for-slider"],
    queryFn: () => mealsServices.getAllMeals("", 1, 100), // Get a large batch once
  });

  if (isReviewsLoading || isMealsLoading) return <Loading />;

  // Safely extract arrays from your serverless responses
  const reviews = reviewsData?.data || [];
  const meals = mealsData?.data || [];

  return (
    <Box sx={{ padding: "50px 0" }}>
      <Container fixed sx={{ padding: { lg: "0 100px" }, overflow: "hidden" }}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={5} lg={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#27302f",
                mb: 2,
              }}
            >
              What Our <span style={{ color: "#E84929" }}>Customers</span> Say
            </Typography>
            <Typography variant="body1" sx={{ color: "#27302f", mb: 2 }}>
              Our customers love our meals! Check out some of their feedback and
              get a taste of what makes us special.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{ padding: "0 50px", marginLeft: "auto" }}
          >
            <Swiper
              effect="cards"
              grabCursor={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={reviews.length > 1}
              modules={[EffectCards, Autoplay]}
              style={{ width: "100%", height: "250px" }}
              cardsEffect={{
                slideShadows: false,
                perSlideOffset: 10,
                rotate: 10,
              }}
            >
              {reviews.slice(0, 5).map((item, index) => {
                // Find the specific meal name for this review
                const meal = meals.find((m) => m.id === item.mealId);

                return (
                  <SwiperSlide key={item.id}>
                    <Paper
                      elevation={5}
                      sx={{
                        padding: "20px",
                        background: index % 2 === 0 ? "#27302f" : green[300],
                        textAlign: "center",
                        minHeight: "180px",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: index % 2 === 0 ? "#e56950" : "#a53721",
                          mb: 1,
                        }}
                      >
                        {item.user}
                      </Typography>

                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: "0.95rem",
                          color: index % 2 === 0 ? green[300] : "#a53721",
                          mb: 1,
                        }}
                      >
                        {meal?.name || "Special Dish"}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: index % 2 === 0 ? "#fff" : "#27302f",
                          mb: 2,
                          fontStyle: "italic",
                        }}
                      >
                        "{item.comment}"
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <Rating
                          value={Number(item?.rating)}
                          precision={0.5}
                          readOnly
                          icon={<StarIcon sx={{ color: "#c18803" }} />}
                          emptyIcon={
                            <StarBorderIcon sx={{ color: "#c18803" }} />
                          }
                          size="small"
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: index % 2 === 0 ? "#fff" : "#27302f" }}
                        >
                          {item?.rating} / 5
                        </Typography>
                      </Box>
                    </Paper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
