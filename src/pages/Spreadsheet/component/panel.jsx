import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Menu, MenuItem } from "react-pro-sidebar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const Panel = ({
  EditPanel,
  // propType,
  // setPropType,
  // propCategory,
  // setPropCategory,
  // propAmount,
  // setPropAmount,
  // propMonth,
  // setPropMonth,
  // propYear,
  // setPropYear,
}) => {
  const [propType, setPropType] = useState("Income");
  const [propCategory, setPropCategory] = useState("Other");
  const [propAmount, setPropAmount] = useState("");
  const [propMonth, setPropMonth] = useState("Jan");
  const [propYear, setPropYear] = useState(2023);

  const handleChange = (func, value) => {
    func(value);
    console.log(value);
  };
  return (
    <Box style={!EditPanel ? { width: "80%", height: "10%" } : null}>
      <Box
        style={{
          background: "white",
          display: "flex",
          height: "100%",
          borderRadius: "10px",
        }}>
        <Box className="micro-selectors">
          <Menu style={{ width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="type-selecter">Type</InputLabel>
              <Select
                labelId="type-selecter"
                id="type"
                value={propType}
                label="Type"
                onChange={(event) =>
                  handleChange(setPropType, event.target.value)
                }>
                <MenuItem value={"Income"}>Income</MenuItem>
                <MenuItem value={"Expense"}>Expense</MenuItem>
              </Select>
            </FormControl>
          </Menu>
        </Box>
        <Box className="micro-selectors">
          <Menu style={{ width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="Category-selecter">Category</InputLabel>
              <Select
                native
                labelId="Category-selecter"
                id="category"
                value={propCategory}
                label="Category"
                onChange={(event) =>
                  handleChange(setPropCategory, event.target.value)
                }>
                <option value={"Other"}>Other</option>
                {propType === "Income" ? (
                  <optgroup label="Income">
                    <option value={"Salary"}>Salary</option>
                    <option value={"Business"}>Business</option>
                    <option value={"Freelancing"}>Freelancing</option>
                  </optgroup>
                ) : null}
                {propType === "Expense" ? (
                  <optgroup label="Expense">
                    <option value={"Housing"}>Housing</option>
                    <option value={"Transportation"}>Transportation</option>
                    <option value={"Entertainment"}>Entertainment</option>
                    <option value={"Healthcare"}>Healthcare</option>
                    <option value={"Food"}>Food</option>
                  </optgroup>
                ) : null}
              </Select>
            </FormControl>
          </Menu>
        </Box>
        <Box className="micro-selectors">
          <TextField
            label="Amount"
            variant="outlined"
            value={propAmount}
            type="number"
            autoComplete="off"
            onChange={(event) =>
              handleChange(setPropAmount, event.target.value)
            }
          />
        </Box>
        <Box className="micro-selectors">
          <Menu style={{ width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="month-selecter">Month</InputLabel>
              <Select
                labelId="month-selecter"
                id="month"
                value={propMonth}
                label="Month"
                onChange={(event) =>
                  handleChange(setPropMonth, event.target.value)
                }>
                <MenuItem value={"Jan"}>Jan</MenuItem>
                <MenuItem value={"Feb"}>Feb</MenuItem>
                <MenuItem value={"Mar"}>Mar</MenuItem>
                <MenuItem value={"Apr"}>Apr</MenuItem>
                <MenuItem value={"May"}>May</MenuItem>
                <MenuItem value={"Jun"}>Jun</MenuItem>
                <MenuItem value={"Jul"}>Jul</MenuItem>
                <MenuItem value={"Aug"}>Aug</MenuItem>
                <MenuItem value={"Sep"}>Sep</MenuItem>
                <MenuItem value={"Oct"}>Oct</MenuItem>
                <MenuItem value={"Nov"}>Nov</MenuItem>
                <MenuItem value={"Dec"}>Dec</MenuItem>
              </Select>
            </FormControl>
          </Menu>
        </Box>
        <Box className="micro-selectors">
          <Menu style={{ width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="year-selecter">Year</InputLabel>
              <Select
                labelId="year-selecter"
                id="year"
                value={propYear}
                label="Year"
                onChange={(event) =>
                  handleChange(setPropYear, event.target.value)
                }>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
              </Select>
            </FormControl>
          </Menu>
        </Box>
        {!EditPanel ? (
          <Box className="confirm-btn">
            <CheckCircleOutlineIcon style={{ width: "100%", height: "100%" }} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
