import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Menu, MenuItem } from "react-pro-sidebar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const Panel = ({ EditPanel, Params, SetDataRows, CallBack }) => {
  console.log(Params);
  const [propType, setPropType] = useState(!EditPanel ? "Income" : Params.type);
  const [propCategory, setPropCategory] = useState(
    !EditPanel ? "Other" : Params.category
  );
  const [propAmount, setPropAmount] = useState(!EditPanel ? "" : Params.amount);
  const [propMonth, setPropMonth] = useState(!EditPanel ? "Jan" : Params.month);
  const [propYear, setPropYear] = useState(!EditPanel ? 2023 : Params.year);

  const [isAmountValid, setIsAmountValid] = useState(true);

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const submit = (event) => {
    if (propAmount.trim() === "") {
      setIsAmountValid(false);
      return;
    } else {
      setIsAmountValid(true);
    }
    event.preventDefault();
    SetDataRows((state) => {
      console.log(state);

      return state.concat({
        id: state.length + 1,
        category: propCategory,
        type: propType,
        amount: propAmount,
        month: propMonth,
        year: propYear,
      });
    });
  };

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
            error={!isAmountValid}
            helperText={!isAmountValid ? "Incorrect entry." : ""}
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
                {month.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
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
            <CheckCircleOutlineIcon
              style={{ width: "100%", height: "100%" }}
              onClick={submit}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
