import { useEffect, React, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import SearchIcon from "../icons/magnifying-glass.png";
import { blue } from "@mui/material/colors";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CachedIcon from "@mui/icons-material/Cached";
import DownloadButton from "./buttons";
import "./table.css";
import logo from "../icons/logo_png.png (1).png";
import DrawerComp from "./Drawer";
import { AppBar, Toolbar } from "@mui/material";
styled(TableContainer)({
  overflowX: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  marginLeft: "20px",
});
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: "bold",
  textAlign: "left",

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: blue[900],
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  width: "100%",
  transition: "box-shadow 0.3s",

  "&:hover": {
    boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.2)",
  },

  "&:nth-of-type(even)": {
    backgroundColor: blue[50],
  },

  "&:last-child td, &:last-child th": {
    borderBottom: "none",
  },
}));

export default function CustomizedTables() {
  const [influencers, setInfluencer] = useState([]);
  const [value, setValue] = useState("");

  const API = "https://jsonplaceholder.typicode.com/users";
  async function logMovies(url) {
    try {
      const response = await fetch(url);
      const info = await response.json();
      setInfluencer(info);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    logMovies(API);
  }, []);

  return (
    <div className="table">
      <div className="header">
        <div className="navigation">
          <div className="tabs">
            <div className="tab">Users</div>
            <div className="tab">Campaigns</div>
            <div className="tab">Tables</div>
            <div className="tab">List</div>
          </div>

          <div className="cached">
            <CachedIcon />
          </div>
          <div className="btn">
            <DownloadButton />
          </div>
        </div>

        <div className="textField">
          {" "}
          <span>
            {" "}
            <img src={SearchIcon} alt="" />
          </span>
          <span>
            {" "}
            <input
              type="text"
              placeholder="Search for influencer"
              onChange={(e) => setValue(e.target.value)}
            />
          </span>
        </div>
      </div>

      <div className="response">
        <AppBar
          sx={{
            background:
              "linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%)",
          }}
        >
          <Toolbar>
            <img className="Logo" src={logo} alt="" />

            <>
              <div className="textField">
                {" "}
                <span>
                  {" "}
                  <img src={SearchIcon} alt="" />
                </span>
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Search for influencer"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </span>
              </div>

              <DrawerComp />
            </>
          </Toolbar>
        </AppBar>
      </div>

      <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
        <Table
          sx={{ maxWidth: 1000, margin: "4%", width: "95%" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow sx={{ borderRadius: "10px" }}>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Website</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(influencers)}
            {influencers
              .filter((item) => {
                return value.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(value.toLowerCase());
              })
              .map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.website}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
