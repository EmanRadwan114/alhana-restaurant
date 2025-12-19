import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0,0.05)",
      }}
    >
      <CircularProgress
        variant="indeterminate"
        size={40}
        thickness={4}
        sx={{ color: "#E84929" }}
      />
    </Box>
  );
}
