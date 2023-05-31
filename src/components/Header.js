import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#f1f1f1",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        padding: "10px 20px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            alt="alphha_search"
            src="/ALphaSearch 1.png"
            style={{ margin: "0 60px 0 30px" }}
          />

          <Box sx={{ marginLeft: "60px", flexGrow: 1 }}>
            <Button>sfss</Button>
            <Button>sfss</Button>
            <Button>sfss</Button>
          </Box>
          <Box>
            <Avatar
              alt="avatar"
              src="/image 3.png"
              sx={{
                border: "1px solid #4A2CF5",
                height: "60px",
                width: "60px",
                flexGrow: 0,
                marginRight: "30px",
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
