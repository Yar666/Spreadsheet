import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import { Panel } from "./panel"
import React, { useState } from "react"

export const ModalWindow = ({
  data,
  openDialog,
  handleDialogClose,
  setDataRows,
  propParams,
}) => {
  const [callback, setCallback] = useState([
    () => {
      console.log("Function is not written")
    },
  ])
  const onSubmit = () => {
    if (callback[0]()) {
      console.log(data)
      handleDialogClose()
    }
  }
  return (
    <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="false">
      <DialogTitle>Edit Record</DialogTitle>
      <DialogContent
        sx={{
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Panel
          EditPanel={true}
          SetDataRows={setDataRows}
          params={propParams}
          setcallBackSubmit={setCallback}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button onClick={onSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
