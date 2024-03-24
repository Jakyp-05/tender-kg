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
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ background: "#44ACE9" }}>
          {!isSmallScreen && (
            <TableRow>
              {rowsName.map((el, index) => (
                <TableCell key={index} sx={{ color: "#fff", fontSize: "18px" }}>
                  {el}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {rowsData.map((rowData, index) => (
            <React.Fragment key={rowData.id}>
              <TableRow
                onClick={() => handleRowClick(rowData.id)}
                style={{ cursor: "pointer" }}
              >
                {isSmallScreen ? (
                  <TableCell>
                    <Card variant="outlined" sx={{ marginBottom: "20px" }}>
                      <CardContent>
                        <div>
                          <Typography>
                            <strong>Тендер №20434.</strong> {rowData.name.name1}
                          </Typography>
                          <Typography>{rowData.name.name2}</Typography>
                          <Typography>
                            <strong>Способ подачи заявок:</strong>
                            {rowData.name.name3}
                          </Typography>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <strong>Категории:</strong>
                          <Typography>{rowData.category}</Typography>
                        </div>
                        <div style={{ marginTop: "10px" }}>
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
                          <div style={{width: '170px', textAlign: "start"}}>
                            <Typography
                              style={{ color: "green", marginTop: "10px" }}
                            >
                              {rowData.date.new}
                            </Typography>
                            <Typography style={{ marginTop: "10px" }}>
                              {rowData.date.public}
                            </Typography>
                            <div
                              style={{
                                width: "135px",
                                boxSizing: "border-box",
                                padding: "5px 10px",
                                textAlign: "center",
                                borderRadius: "3px",
                                marginTop: '10px',
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
                    <TableCell sx={{ width: "180px", textAlign: "center" }}>
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
  );
}

export default MyTable;
