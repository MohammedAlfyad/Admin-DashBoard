import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "../data";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 33,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "registrarId",
    headerName: "Registrar ID",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
    align: "center",
    headerAlign: "center",
  },
];
const Invoices = () => {
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <Box sx={{ height: 650, mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
