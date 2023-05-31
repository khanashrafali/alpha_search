import {
  Autocomplete,
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

const Dashboard = () => {
  const searchContent = [{ title: "" }];
  return (
    <>
      <Container component="main" maxWidth="xl" sx={{ width: "100%" }}>
        <Container
          sx={{
            height: "200px",
            width: "100%",
            maxWidth: "xl",
            background:
              "url('assets/Group (2).png') left center no-repeat, url('assets/ALphaSearch_symbol 2.png') right 100px center no-repeat, ghostwhite",
          }}
        >
          <Typography component="h2" sx={{ alignItems: "center" }}>
            Find what you're looking for with{" "}
            <Typography component="span" sx={{ color: "#4A2CF5" }}>
              Alphasearch.
            </Typography>
          </Typography>
          <Stack>
            <Stack>
              <img
                src="/search-normal.png"
                alt="search-icon"
                style={{ height: "25px", width: "25px" }}
              />
              <TextField
                placeholder="Search a term, industry, or a specific company"
                className="input-one"
              />
            </Stack>
            <Button variant="text" className="input-two">
              <Link>Recently viewed</Link>
              <WatchLaterOutlinedIcon fontSize="large" />
            </Button>
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Dashboard;
