import { DataGrid } from '@mui/x-data-grid';
import { Card } from '@mui/material';
import { Delete } from '@mui/icons-material';
const columns = [
    { field: 'ID', headerName: 'ID', type: 'number' },
    { field: 'Name', headerName: 'Name', sortable: false },
    { field: 'TaskQuantity', headerName: 'Total', type: 'number' },
    {
        field: 'Remark',
        headerName: 'Remark',
        sortable: false
    },
    {
        field: 'CreatedAt',
        headerName: 'CreatedAt',
        sortable: false
    },

    {
        headerName: 'Action',
        sortable: false,
        renderCell: (props) => {
            const { id } = props;
            return <Delete key={id} />;
        }
    }
];

const rows = () => {
    let d = [];
    for (let i = 1; i < 300; i++) {
        d.push({ ID: i, Name: 'Snow', CreatedAt: new Date(), Remark: '35' });
    }
    return d;
};

const Categories = () => (
    <Card sx={{ height: 'calc(100vh - 130px)' }}>
        <DataGrid getRowId={(r) => r.ID} rows={rows()} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />;
    </Card>
);

export default Categories;
