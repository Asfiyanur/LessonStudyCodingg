import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TextFieldComp = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" marginTop={4}>
          Text Field
        </Typography>

        <Box sx={{ mt: 4, textAling: "center" }}>
          <TextField
            id="email"
            label="Email"
            placeholder="enter your email"
            error={error}
            helperText={error && "Incorrect email format"}
            fullWidth
          />
          <TextField
            id="password"
            label="password"
            placeholder="enter your password"
            error={error}
            helperText={error && "Incorrect password format"}
            fullWidth
          />
          <Button variant="contained" color="warning" sx={{ mt: 3 }}>
            submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
