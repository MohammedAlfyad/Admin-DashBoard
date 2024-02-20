import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography align="center" color={theme.palette.error.main} variant="h4" sx={{mt:"150px"}}>
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
    </Box>
  );
};

export default NotFound;