import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./main.css"
import { Box } from "@mui/material"
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import ClearIcon from "@mui/icons-material/Clear"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import expenses from "../../assets/expense.png"
import hryvnia from "../../assets/hryvnia.png"

import {
  BarChart_Income,
  BarChart_Expenses,
  LineChar_Statistic,
} from "./components/Bar/Charts"
const Item = ({ title, selected, setSelected }) => {
  return (
    <MenuItem
      value={title}
      active={selected === title}
      onClick={() => setSelected(title)}
    >
      {" "}
      {title}{" "}
    </MenuItem>
  )
}
export const AnalyticsPage = () => {
  let { id } = useParams()

  const [year, setYear] = useState(2023)
  const handleChange = (event) => {
    setYear(event.target.value)
  }

  const [selected, setSelected] = useState("All")
  const money = 0

  return (
    <Box style={{ width: "100%", height: "100%", display: "flex" }}>
      <Sidebar
        className="data-sidebar"
        style={{ height: "100%", width: "125px", minWidth: "unset" }}
      >
        <Box style={{ position: "fixed" }}>
          <Link to={"/Home_page"}>
            <ClearIcon className="ExitIco" />
          </Link>
        </Box>
        <Box sx={{ minWidth: 120, marginTop: "50%" }}>
          <Menu>
            <FormControl fullWidth>
              <InputLabel id="year-selecter">Year</InputLabel>
              <Select
                labelId="year-selecter"
                id="year"
                value={year}
                label="Year"
                onChange={handleChange}
              >
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
              </Select>
            </FormControl>
          </Menu>
        </Box>
        <Box
          sx={{
            margin: "auto",
            "& .ps-menu-button": {
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "700",
            },
          }}
        >
          <Menu>
            <Item title={"All"} selected={selected} setSelected={setSelected} />
            <Item title={"Jan"} selected={selected} setSelected={setSelected} />
            <Item title={"Feb"} selected={selected} setSelected={setSelected} />
            <Item title={"Mar"} selected={selected} setSelected={setSelected} />
            <Item title={"Apr"} selected={selected} setSelected={setSelected} />
            <Item title={"May"} selected={selected} setSelected={setSelected} />
            <Item title={"Jun"} selected={selected} setSelected={setSelected} />
            <Item title={"Jul"} selected={selected} setSelected={setSelected} />
            <Item title={"Aug"} selected={selected} setSelected={setSelected} />
            <Item title={"Sep"} selected={selected} setSelected={setSelected} />
            <Item title={"Oct"} selected={selected} setSelected={setSelected} />
            <Item title={"Nov"} selected={selected} setSelected={setSelected} />
            <Item title={"Dec"} selected={selected} setSelected={setSelected} />
          </Menu>
        </Box>
        <Box style={{ width: "fit-content" }}>
          <Link to={`/Home_page/${id}/Spreadsheet`}>
            <Box
              sx={{
                fontWeight: "600",
                backgroundColor: "#B0BBD8",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={expenses} style={{ width: "50px" }} alt="" />
              SPREADSHEET
            </Box>
          </Link>
        </Box>
      </Sidebar>
      <Box className="wrapper">
        <Box className="second-line-wrapper">
          <Box className="pretty-radius rectangle123">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              TOTAL BALANCE
              <Box
                sx={{
                  color: "#0BA624",
                  width: "auto",
                  fontSize: "50px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <img style={{ width: "50px" }} src={hryvnia} alt="" />
                {money}
              </Box>
            </Box>
          </Box>
          <Box className="info-bar pretty-radius">
            {/* <Box className="panel_name">Income Source</Box> */}
            <BarChart_Income />
          </Box>
          <Box className="info-bar pretty-radius">
            {/* <Box className="panel_name">Expenses Source</Box> */}
            <BarChart_Expenses />
          </Box>
        </Box>
        <Box className="line-chart">
          <Box className="line-chart-header">
            <Box className="marg">Income & Expenses</Box>
            <Box style={{ display: "flex", gap: "2vw" }} className="marg">
              <Box className="line-chart-mainInfo">
                <Box>$0</Box>
                <Box style={{ color: "#BE1207" }}>Max. Expenses</Box>
              </Box>
              <Box className="line-chart-mainInfo">
                <Box>$0</Box>
                <Box style={{ color: "#0BBE07" }}>Max. Income</Box>
              </Box>
            </Box>
          </Box>
          <Box className="line-chart-body">
            <Box className="line-chart-wrapper">
              <LineChar_Statistic />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
