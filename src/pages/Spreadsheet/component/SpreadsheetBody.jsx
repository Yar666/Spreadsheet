import React, { useState } from "react"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import EditIcon from "@mui/icons-material/Edit"

import { Button } from "@mui/material"
import { Panel } from "./panel"
import { ModalWindow } from "./modalWindow"

export const SpreadsheetBody = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  const [propParams, setPropParams] = useState([])
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
          setPropParams(params.row)
          setOpenDialog(true)
        }

        return (
          <Button onClick={handleEditClick}>
            <EditIcon />
          </Button>
        )
      },
    },
  ]

  let data = [
    {
      id: 1,
      type: "Expense",
      category: "Healthcare",
      amount: 5000,
      month: "Jul",
      year: 2023,
    },
  ]
  const [dataRows, setDataRows] = useState(data)

  return (
    <Box className="Spreadsheet-body">
      <Panel EditPanel={false} SetDataRows={setDataRows} />
      <Box style={{ width: "100%", height: "inherit" }}>
        <DataGrid rows={dataRows} columns={columns} hideFooter />
        <ModalWindow
          data={dataRows}
          openDialog={openDialog}
          handleDialogClose={handleDialogClose}
          setDataRows={setDataRows}
          propParams={propParams}
        />
      </Box>
    </Box>
  )
}
