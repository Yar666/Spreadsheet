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
import { Panel } from "./component/panel";
export const SpreadsheetPage = () => {
  let { id } = useParams();
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("Other");
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState(2023);
  console.log(year);

  const [PanelCategory, setPanelCategory] = useState("Other");
  const [PanelAmount, setPanelAmount] = useState("");
  const [PanelType, setPanelType] = useState("Income");
  const [PanelMonth, setPanelMonth] = useState("Jan");
  const [PanelYear, setPanelYear] = useState(2023);

  const [openDialog, setOpenDialog] = useState(false);
  // const [selectedRow, setSelectedRow] = useState(null);
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const columns = [
    { field: "category", headerName: "Categories", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    { field: "month", headerName: "Month", flex: 1 },
    { field: "year", headerName: "Year", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        const handleEditClick = () => {
          setPanelCategory(params.row.category);
          setPanelAmount(params.row.amount);
          setPanelType(params.row.type);
          setPanelMonth(params.row.month);
          setPanelYear(params.row.year);
          // setSelectedRow({
          //   category: params.row.category,
          //   type: params.row.type,
          //   amount: params.row.amount,
          //   month: params.row.month,
          //   year: params.row.year,
          // });
          // console.log(selectedRow);
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
  const data = [
    {
      id: 1,
      category: "Healthcare",
      type: "Expense",
      amount: 5000,
      month: "Jul",
      year: 2023,
    },
  ];

  return (
    <Box style={{ width: "100%", height: "100%", display: "flex" }}>
      <Box style={{ position: "absolute" }}>
        <Link to={`/Home_page/${id}/ANALYTICS`}>
          <ArrowBackIcon className="ExitIco" />
        </Link>
      </Box>
      <Box className="Spreadsheet-body">
        <Panel
          EditPanel={false}
          propType={type}
          setPropType={setType}
          propCategory={category}
          setPropCategory={setCategory}
          propAmount={amount}
          setPropAmount={setAmount}
          propMonth={month}
          setPropMonth={setMonth}
          propYear={year}
          setPropYear={setYear}
        />
        <Box style={{ width: "100%", height: "inherit" }}>
          <DataGrid rows={data} columns={columns} hideFooter />
          <Dialog
            open={openDialog}
            onClose={handleDialogClose}
            maxWidth="false">
            <DialogTitle>Edit Record</DialogTitle>
            <DialogContent
              sx={{
                width: "500px",
                height: "200px",
                display: "flex",
                alignItems: "center",
              }}>
              <Panel
                EditPanel={true}
                propType={PanelType}
                setPropType={setPanelType}
                propCategory={PanelCategory}
                setPropCategory={setPanelCategory}
                propAmount={PanelAmount}
                setPropAmount={setPanelAmount}
                propMonth={PanelMonth}
                setPropMonth={setPanelMonth}
                propYear={PanelYear}
                setPropYear={setPanelYear}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button onClick={handleDialogClose} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
};
