import { Box, Typography } from "@mui/material";
import ErroIcon from "@mui/icons-material/Error";

const ErrorMessage = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "5px", mt: "6px" }}>
      <ErroIcon color="error" sx={{ width: "20px" }} />
      <Typography color="error.main" variant="span" fontSize="14px">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
