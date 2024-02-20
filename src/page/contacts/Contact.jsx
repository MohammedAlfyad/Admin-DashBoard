import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { rows } from "../data";

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
    headerAlign: "left",
    align: "left",
    width: 44,
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
const Contact = () => {
  return (
    <Box>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <Box sx={{ height: 665, width: "99%", mx: "auto" }}>
        <DataGrid
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

export default Contact;
