import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';

// Генерируем случайные данные для таблицы
const generateData = () => {
  const rows = [];
  for (let i = 0; i < 7; i++) {
    const cells = [];
    for (let j = 0; j < 5; j++) {
      cells.push(``);
    }
    rows.push(cells);
  }
  return rows;
};

const Tables = ({ openModal }) => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [data] = useState(generateData());

  const handleCellHover = (rowIndex, cellIndex) => {
    setHoveredCell({ rowIndex, cellIndex });
  };

  const handleCellLeave = () => {
    setHoveredCell(null);
  };

  const renderIcons = () => {
    return (
      <div className="flex gap-2">
        <IconButton color="primary" size="small">
          <AddIcon
            onClick={() => {
              openModal(true);
            }}
          />
        </IconButton>
        <IconButton color="success" size="small">
          <DownloadIcon />
        </IconButton>
        <IconButton color="error" size="small">
          <DeleteIcon />
        </IconButton>
      </div>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900, borderCollapse: 'collapse' }}>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  onMouseEnter={() => handleCellHover(rowIndex, cellIndex)}
                  onMouseLeave={handleCellLeave}
                  sx={{
                    border: '1px solid black',
                    minWidth: '200px',
                    height: '80px',
                  }}
                >
                  {hoveredCell &&
                  hoveredCell.rowIndex === rowIndex &&
                  hoveredCell.cellIndex === cellIndex
                    ? renderIcons()
                    : cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
