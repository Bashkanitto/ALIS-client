import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/CloudDownload';

const rows = [
  { id: 1, name: 'Jon', binIin: 'Snow', jur_address: 35 },
  { id: 2, name: 'Cersei', binIin: 'Lannister', jur_address: 42 },
  { id: 3, name: 'Jaime', binIin: 'Lannister', jur_address: 45 },
];

// eslint-disable-next-line react/prop-types
function Tables({ openModal }) {
  const columns = [
    {
      field: '__check__',
      headerName: '',
      width: 50,
      sortable: false,
      filterable: false,
    },
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Имя компании', width: 200 },
    { field: 'binIin', headerName: 'БИН', width: 200 },
    { field: 'jur_address', headerName: 'Реквизиты компании', width: 200 },
    {
      field: 'actions',
      headerName: 'Действия',
      width: 200,
      sortable: false,
      type: 'number',
      renderCell: params => (
        <div>
          <IconButton
            aria-label="edit"
            onClick={() =>
              console.log(`Редактировать запись с ID: ${params.row.id}`)
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => console.log(`Удалить запись с ID: ${params.row.id}`)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="download"
            onClick={() => console.log(`Скачать запись с ID: ${params.row.id}`)}
          >
            <DownloadIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="w-[1100px] h-[500px] relative">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        getRowId={row => row.id}
      />
      <div className="text-neutral-950">
        <button
          onClick={openModal}
          className="absolute flex items-center bottom-[0] bg-transparent h-[53px] text-lg"
        >
          Создать
        </button>
      </div>
    </div>
  );
}

export default Tables;
