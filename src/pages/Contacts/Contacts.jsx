import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
} from "@mui/material";
import Banner from "./../../components/SharedComponents/Banner";

export default function Contacts() {
  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Banner
        heroImage="https://images.unsplash.com/photo-1583549323543-7ae855a78d6d?w=600&auto=format&fit=crop&q=80"
        title="Celebrate with Us"
        desc="Book your next event and let us handle the catering"
      />
      <Container fixed>
        {/* Contact Section */}
        <Box
          sx={{
            px: 3,
            py: 5,
            margin: "auto",
            marginTop: "30px",
          }}
        >
          <Grid container spacing={5} alignItems="center">
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  We'd love to hear from you. Send us a message and we'll
                  respond as soon as possible!
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#E84929",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        "&.Mui-focused": {
                          color: "#E84929",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#E84929",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        "&.Mui-focused": {
                          color: "#E84929",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#E84929",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        "&.Mui-focused": {
                          color: "#E84929",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#E84929",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        "&.Mui-focused": {
                          color: "#E84929",
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      borderRadius: "30px",
                      textTransform: "none",
                      backgroundColor: "#E84929",
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Contact Info and Map */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" gutterBottom>
                  📍 District 4, Tiba Market, 6 October City, Egypt.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  📞 +20 100 123 4567
                </Typography>
                <Typography variant="body1" gutterBottom>
                  ✉️ support@AlHana.com
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  minHeight: "450px",
                  boxShadow: 2,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27649.508912481062!2d30.9443047!3d29.974009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857fb48e3958b%3A0xf4475b08341a41c2!2z2YXYudis2YbYp9iqINmIINmF2LTZiNmK2KfYqiDZiNio2YrYqtiy2Kcg2Ygg2LTYp9mI2LHZhdinINin2YTZh9mG2Kc!5e0!3m2!1sar!2seg!4v1749659998308!5m2!1sar!2seg"
                  width="100%"
                  height="470"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
