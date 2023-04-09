import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton() {
  return (
    <a
      style={{ cursor: "pointer" }}
      href="https://wa.me/6285212272264"
      target="_blank"
    >
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
    </a>
  );
}
