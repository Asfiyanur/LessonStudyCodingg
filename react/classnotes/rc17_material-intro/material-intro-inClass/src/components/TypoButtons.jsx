import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container>
        <Typography variant="h1" component="h6">
          MUI Typography
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          mt={4}
          sx={{
            backgroundColor: "lightgreen",
            color: "#eee",
            fontSize: "1.4rem",
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a
          facilis neque, molestias optio, quaerat quas nisi inventore dolores
          sit tempore nostrum debitis dolorum et, recusandae necessitatibus
          dicta? Nobis, nemo.
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          facilis ducimus modi necessitatibus, explicabo vero eveniet fuga
          delectus recusandae nam corporis quas ipsa consequatur animi minima
          quisquam maxime est inventore.
        </Typography>
      </Container>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: "50%",
            margin: "0 auto",
          }}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>

          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
