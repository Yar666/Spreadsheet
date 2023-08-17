import React from "react";
import "./table.css";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
function generateRows(count) {
  const rows = [];

  for (let i = 1; i <= count; i++) {
    rows.push({
      id: i,
      name: "Name " + i,
      members: i,
      created: i + " hours ago",
    });
  }

  return rows;
}
export const AccountingTable = () => {
  const navigate = useNavigate();
  const handleRowClick = (params) => {
    const id = params.row.id;

    navigate(`/Home_page/${id}/ANALYTICS`);
  };
  const columns = [
    // { field: "id", headerName: "Id", hide: true  },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "members", headerName: "Members", flex: 1 },
    { field: "created", headerName: "Created", flex: 1 },
  ];
  const data = generateRows(15);
  return (
    <Box style={{ width: "80%", height: "75%" }}>
      <DataGrid
        onRowClick={handleRowClick}
        rows={data}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
        }
        hideFooter
      />
    </Box>
  );
};
