import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../page/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from "react";
const Row2 = () => {
  const theme = useTheme();
  const lineRef = useRef(null);

  const handleDownload = () => {
    const lineElement = lineRef.current;
  
    if (!lineElement) {
      console.error('Line element is null');
      return;
    }
  
    // Delay capture by 100 milliseconds
    setTimeout(() => {
      html2canvas(lineElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
  
        // Add title
        pdf.setFontSize(16);
        pdf.setTextColor(0, 0, 0); // Black color
        pdf.text('Revenue Chart', 15, 15); // Title position
  
        // Add description
        pdf.setFontSize(12);
        pdf.setTextColor(100, 100, 100); // Grey color
        pdf.text('This chart displays the revenue generated over time.', 15, 25); // Description position
  
        // Add image of the chart
        pdf.addImage(
          imgData,
          'PNG',
          15,
          35, // Position of the chart image
          pdf.internal.pageSize.getWidth() - 30, // Width of the image
          0, // Height is auto-calculated to maintain aspect ratio
        );
  
        // Save the PDF
        pdf.save('line_chart.pdf');
      });
    }, 100);
  };
  
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }} onClick={handleDownload}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <div ref={lineRef}>
        <Line isDahboard={true} />
        </div>
      </Paper>

      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: 355,
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              key={item.txId}
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
