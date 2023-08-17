import React, { useState } from "react";
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
import { Panel } from "./panel";

export const SpreadsheetBody = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const [propParams, setPropParams] = useState("");
  const columns = [
    { field: "type", headerName: "Type", flex: 1 },
    { field: "category", headerName: "Categories", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    { field: "month", headerName: "Month", flex: 1 },
    { field: "year", headerName: "Year", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        const handleEditClick = () => {
          setPropParams(params.row);
          setOpenDialog(true);
        };

        return (
          <Button onClick={handleEditClick}>
            <EditIcon />
          </Button>
        );
      },
    },
  ];

  let data = [
    {
      id: 1,
      category: "Healthcare",
      type: "Expense",
      amount: 5000,
      month: "Jul",
      year: 2023,
    },
  ];
  const [dataRows, setDataRows] = useState(data);

  const [onSubmit, setonSubmit] = useState(() => {});

  return (
    <Box className="Spreadsheet-body">
      <Panel EditPanel={false} SetDataRows={setDataRows} />
      <Box style={{ width: "100%", height: "inherit" }}>
        <DataGrid rows={dataRows} columns={columns} hideFooter />
        <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="false">
          <DialogTitle>Edit Record</DialogTitle>
          <DialogContent
            sx={{
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}>
            <Panel
              EditPanel={true}
              SetDataRows={setDataRows}
              Params={propParams}
              CallBack={setonSubmit}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={onSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};
