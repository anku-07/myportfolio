import { ContactFromWrap } from "@/styles/StyledComponents/ContactFromWrap";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Grid2, Typography } from "@mui/material";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";

const ContactFrom = () => {
  return (
    <ContactFromWrap className="cmnGap">
      <Container fixed>
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h2">Get in Touch With Us</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12 }}>
                  <Box className="each_input_blk">
                    <Typography variant="body1" className="label">
                      Name
                    </Typography>
                    <InputFieldCommon />
                  </Box>
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <Box className="each_input_blk">
                    <Typography variant="body1" className="label">
                      Subject
                    </Typography>
                    <InputFieldCommon />
                  </Box>
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <Box className="each_input_blk">
                    <Typography variant="body1" className="label">
                      Message
                    </Typography>
                    <InputFieldCommon />
                  </Box>
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <Button className="sendBtn">Send</Button>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </ContactFromWrap>
  );
};

export default ContactFrom;
