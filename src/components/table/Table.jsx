import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import rowsData from "./data";

function MyTable() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedId, setSelectedId] = useState(null);

  const TenderStatus = {
    ONE: "Приём заявок",
    TWO: "Оценка",
    THREE: "Закрыто",
  };

  const getTextColor = (status) => {
    switch (status) {
      case "ONE":
        return { background: "green" };
      case "TWO":
        return { background: "orange" };
      case "THREE":
        return { background: "red" };
      default:
        return { background: "black" };
    }
  };

  const rowsName = [
    "Наименование",
    "Категории",
    "Место поставки",
    "Крайний срок",
  ];

  const handleRowClick = (id) => {
    setSelectedId(id);
    alert(`Выбран id: ${id}`);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: "#44ACE9" }}>
            {!isSmallScreen && (
              <TableRow>
                {rowsName.map((el, index) => (
                  <TableCell
                    key={index}
                    sx={{ color: "#fff", fontSize: "18px" }}
                  >
                    {el}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {records.map((rowData, index) => (
              <React.Fragment key={rowData.id}>
                <TableRow
                  onClick={() => handleRowClick(rowData.id)}
                  style={{ cursor: "pointer" }}
                >
                  {isSmallScreen ? (
                    <TableCell>
                      <Card variant="outlined" sx={{ marginBottom: "20px" }}>
                        <CardContent>
                          {Object.keys(rowData.name).map((key, index) => (
                            <Typography key={index}>
                              {rowData.name[key]}
                            </Typography>
                          ))}
                          <div>
                            <strong>Категории:</strong>
                            <Typography>{rowData.category}</Typography>
                          </div>
                          <div>
                            <strong>Место поставки:</strong>
                            <Typography>{rowData.place}</Typography>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "20px",
                            }}
                          >
                            <strong>Крайний срок:</strong>
                            <div>
                              <Typography style={{ color: "green" }}>
                                {rowData.date.new}
                              </Typography>
                              <Typography>{rowData.date.public}</Typography>
                              <div
                                style={{
                                  width: "135px",
                                  boxSizing: "border-box",
                                  padding: "5px 10px",
                                  textAlign: "center",
                                  borderRadius: "3px",
                                  ...getTextColor(rowData.date.status),
                                }}
                              >
                                <Typography style={{ color: "#1B1B1B" }}>
                                  {TenderStatus[rowData.date.status]}
                                </Typography>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TableCell>
                  ) : (
                    <>
                      <TableCell>
                        <Typography>
                          <strong>Тендер №20434.</strong> {rowData.name.name1}
                        </Typography>
                        <Typography>{rowData.name.name2}</Typography>
                        <Typography>
                          <strong>Способ подачи заявок:</strong>
                          {rowData.name.name3}
                        </Typography>
                      </TableCell>
                      <TableCell>{rowData.category}</TableCell>
                      <TableCell>{rowData.place}</TableCell>
                      <TableCell sx={{ width: "200px", textAlign: "center" }}>
                        <Typography sx={{ color: "green", marginTop: "5px" }}>
                          {rowData.date.new}
                        </Typography>
                        <Typography sx={{ marginTop: "10px" }}>
                          {rowData.date.public}
                        </Typography>
                        <div
                          style={{
                            width: "100%",
                            boxSizing: "border-box",
                            padding: "5px 10px",
                            textAlign: "center",
                            borderRadius: "3px",
                            marginTop: "10px",
                            ...getTextColor(rowData.date.status),
                          }}
                        >
                          <Typography style={{ color: "#1B1B1B" }}>
                            {TenderStatus[rowData.date.status]}
                          </Typography>
                        </div>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          width: "324px",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <Pagination
          onChange={changPage}
          count={npage}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              border: "1px solid #44ACE9",
              borderRadius: "3px",
              margin: "0 2px",
              color: "#333",
              "&.Mui-selected": {
                backgroundColor: "#44ACE9",
                color: "#fff",
              },
            },
            "& .MuiPaginationItem-ellipsis": {
              border: "1px solid #44ACE9",
              width: "30px",
              height: "32px",
              fontSize: "20px",
              borderRadius: "3px",
              margin: "0 2px",
              color: "#333",
            },
          }}
        />
      </div>
    </>
  );
}

export default MyTable;
