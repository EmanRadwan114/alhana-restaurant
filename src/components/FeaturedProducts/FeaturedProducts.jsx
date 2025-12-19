import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Pagination from "@mui/material/Pagination";
import NavsAndTabs from "../SharedComponents/NavsAndTabs";
import MealCard from "../SharedComponents/MealCard";
import { useRef, useState } from "react";
import Loading from "../SharedComponents/Loading";
import { GlobalContext } from "../../context/GlobalContext";
import { useQuery } from "@tanstack/react-query";
import mealsServices from "../../services/mealsServices";

export default function FeaturedProducts({ array, val }) {
  const [value, setValue] = useState(val);
  const sectionRef = useRef(null);

  //^ pagination
  const [page, setPage] = useState(1);
  const [limit] = useState(6); // items per page

  const { data: { data: meals = [] } = {}, isLoading } = useQuery({
    queryKey: ["meals", page, value],
    queryFn: () => mealsServices.getMealsByLabel(value, page, limit),
    keepPreviousData: true,
  });

  // const moveToSectionTop = () => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <Box
          component="section"
          sx={{
            padding: "50px 0",
            minHeight: "600px",
          }}
          ref={sectionRef}
        >
          <Container
            fixed
            sx={{
              padding: { lg: "0 100px" },
            }}
          >
            <Typography
              variant="h2"
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
              Best Sellers
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "60px",
                marginBottom: "50px",
              }}
            >
              <NavsAndTabs
                value={value}
                setValue={(newValue) => {
                  setValue(newValue);
                  setPage(1); // Reset pagination when switching tabs
                }}
                array={array}
                setPage={setPage}
                align="center"
              />
              <Grow in={true} timeout={100}>
                <Box key={value}>
                  <Grid container spacing={4}>
                    {meals.map((item) => (
                      <Grid
                        size={{ xs: 12, sm: 6, md: 4 }}
                        key={item.id + item.name}
                      >
                        <MealCard meal={item} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grow>
            </Box>
            <Box
              sx={{ margin: "auto", display: "flex", justifyContent: "center" }}
            >
              {/* <Pagination
                variant="outlined"
                sx={{ color: "#E84929" }}
                size="large"
                count={pages}
                page={page}
                onChange={(e, value) => {
                  setPage(value);
                  moveToSectionTop();
                }}
              /> */}
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
