import { Box, Tab, Tabs } from "@mui/material";

export default function NavsAndTabs({
  value,
  setValue,
  array,
  setPage,
  align,
}) {
  const handleChange = async (event, newValue) => {
    await setValue(newValue); // Update the value when a tab is selected
    setPage(1);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        TabIndicatorProps={{
          style: {
            backgroundColor: "#E84929",
          },
        }}
        sx={{
          overflowX: "auto", // Ensure overflow works
          scrollbarWidth: "thin", // For Firefox
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "4px",
          },
          "& .MuiTabs-flexContainer": {
            flexWrap: "nowrap", // Important for scrollable tabs
            justifyContent: align, //Important for scroll to work
          },
          width: "100%", // Ensure the tabs take up the full width
        }}
      >
        {array.map((label) => (
          <Tab
            key={label}
            label={label}
            value={label} // Set the value to match the label
            sx={{
              textTransform: "capitalize",
              color: "#555",
              minWidth: "100px",
              "&.Mui-selected": {
                color: "#E84929",
                backgroundColor: "#fff0ec",
                borderRadius: "5px",
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
