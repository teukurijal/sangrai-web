import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";

export default function WhatsAppButton() {
  return (
    <a
      style={{ cursor: "pointer" }}
      href="https://wa.me/6285212272264"
      target="_blank"
    >
      <Box>
      <WhatsAppIcon
        color="success"
        fontSize="large"
        sx={{
          height: "10vh",
          width: "10vw",
          position: "absolute",
          right: "2vw",
          bottom: "2vw",
        }}
      />
      </Box>
    </a>
  );
}
