import React, { useState } from "react";
import "./main.css";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
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
