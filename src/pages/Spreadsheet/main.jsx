import React from "react";
import "./main.css";
import { Box } from "@mui/material";
import { GoBackArrow } from "./component/goBack";
import { SpreadsheetBody } from "./component/SpreadsheetBody";
export const SpreadsheetPage = () => {
  return (
    <Box style={{ width: "100%", height: "100%", display: "flex" }}>
      <GoBackArrow />
      <SpreadsheetBody />
    </Box>
  );
};
