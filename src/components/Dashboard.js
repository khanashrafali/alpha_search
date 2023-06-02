import {
  Autocomplete,
  Button,
  Container,
  Grid,
  Link,
  Box,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Slider,
  Switch,
} from "@mui/material";
import React from "react";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { Label } from "@mui/icons-material";

const Dashboard = () => {
  const searchContent = [{ title: "" }];
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexGrow: 1,
            height: 160,
            background:
              "url('/Group (2).png') left center no-repeat, url('/ALphaSearch_symbol 2.png') right 100px center no-repeat, ghostwhite",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Grid item>
              <Typography
                component="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  mt: 5,
                  fontSize: "25px",
                }}
              >
                Find what you're looking for with{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "#4A2CF5",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Alphasearch.
                </Typography>
              </Typography>
            </Grid>
            <Grid item sx={{ margin: "0 20%" }}>
              <Grid
                container
                sx={{
                  position: "absolute",
                  marginTop: "42px",
                  display: "flex",
                }}
              >
                <Grid
                  item
                  xs={8}
                  sx={{ display: "flex", position: "relative" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      padding: "0 7px",
                      top: "1.5rem",
                    }}
                  >
                    <img src="/search-normal.png" />
                  </span>
                  <TextField
                    placeholder="Search a term, industry, or a specific company"
                    variant="outlined"
                    size="small"
                    sx={{
                      width: "100%",
                      borderRightStyle: "none",
                      outline: "none",
                      borderStyle: "none",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    sx={{ height: "100%", outline: "none", width: "100%" }}
                  >
                    dsff
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          sx={{ columnGap: "10px", display: "flex", flexDirection: "row" }}
        >
          <Grid
            item
            xs={3}
            md={3}
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "50%",
              marginLeft: "10px",
              height: "400px",
              border: "1px solid grey",
              borderRadius: "5px",
              padding: "0 20px ",
              overflowY: "scroll",
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography component="p" sx={{ fontWeight: "bold" }}>
                Filter
              </Typography>
              <Link sx={{ textDecoration: "none", color: "red" }}>
                Clear All
              </Link>
            </Grid>
            <Grid item container>
              <FormControl className="survey-form">
                <Grid item>
                  <Typography component="h5">Terms</Typography>
                  <InputLabel>Includess these terms</InputLabel>
                  <br />
                  <Input placeholder="Type any terms" variant="outlined" />
                </Grid>
                <Grid item>
                  <InputLabel>Excludes these terms</InputLabel>
                  <br />
                  <Input placeholder="Type any terms" variant="outlined" />
                </Grid>
                <Grid item>
                  <Typography component="h3">Operating Model</Typography>
                  <Typography component="h5">Industry</Typography>
                  <InputLabel>Include</InputLabel>
                  <br />
                  <Input placeholder="Type any terms" variant="outlined" />
                </Grid>
                <Grid item>
                  <InputLabel>Excludes</InputLabel>
                  <br />
                  <Input placeholder="Type any terms" variant="outlined" />
                </Grid>
                <Grid item>
                  <Typography component="p">Location</Typography>
                  <InputLabel>Headquarters</InputLabel>
                  <Select label="Search Location">
                    <MenuItem>PDF</MenuItem>
                    <MenuItem>txt</MenuItem>
                    <MenuItem>ePub</MenuItem>
                    <MenuItem>fb2</MenuItem>
                    <MenuItem>mobi</MenuItem>
                  </Select>
                  <br />
                </Grid>
                <Grid item>
                  <Typography component="p">Size</Typography>
                  <InputLabel>Revenue</InputLabel>
                  <br />
                  <Input placeholder="Type any terms" variant="outlined" />
                  <Input placeholder="Type any terms" variant="outlined" />
                  <Slider
                    defaultValue="50"
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                </Grid>
                <Grid item>
                  <InputLabel>Employee</InputLabel>
                  <br />
                  <Input placeholder="Type any terms" variant="outlined" />
                  <Input placeholder="Type any terms" variant="outlined" />
                  <Slider
                    defaultValue="50"
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                </Grid>
                <Grid item>
                  <Typography component="p">Company I've viewed</Typography>
                  <Switch label="Label" aria-label="switch" />
                </Grid>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            item
            xs={9}
            md={9}
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              top: "50%",
              marginLeft: "10px",
              height: "400px",
              padding: "0 20px ",
            }}
            container
          >
            <Grid item xs={4}>
              <Box
                className="box"
                sx={{
                  backgroundColor: "#dadafa",
                  height: "150px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "10px",
                }}
                id="box-1"
              >
                <Typography variant="subtitle1" className="hed">
                  Search Company
                </Typography>
                <img
                  style={{ height: "120px", marginTop: "25px" }}
                  src="/Layer 1.png"
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                className="box"
                sx={{
                  backgroundColor: "#dadafa",
                  height: "150px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "10px",
                }}
                id="box-2"
              >
                <Typography variant="subtitle1" className="hed">
                  Discover Similar Company
                </Typography>
                <img
                  style={{ height: "120px", marginTop: "25px" }}
                  src="/Group.png"
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                className="box"
                sx={{
                  backgroundColor: "#dadafa",
                  height: "150px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "10px",
                }}
                id="box-3"
              >
                <Typography variant="subtitle1" className="hed">
                  Browse Company by Industry
                </Typography>
                <img
                  style={{ height: "120px", marginTop: "25px" }}
                  src="/Group (1).png"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
