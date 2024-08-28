import Header from '@/components/Header';
import { colorTokens } from '@/theme';
import { Box, Theme, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';

const Contact = () => {
  const theme: Theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const columns: Array<GridColDef> = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
      headerClassName: 'MuiDataGrid-columnHeaders',
    },
    {
      field: 'registrarId',
      headerName: 'Registrar ID',
      headerClassName: 'MuiDataGrid-columnHeaders',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders',
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'MuiDataGrid-columnHeaders',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders',
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders',
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders',
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders',
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1,
      headerClassName: 'MuiDataGrid-columnHeaders',
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="Contacts availaible List for future referances"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[600],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
