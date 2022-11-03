import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import data from "../data";
import Grid from "@mui/material/Grid";

export default function MultiActionAreaCard() {
  return (
    <Grid
      container
      spacing={2}
      m={4}
      justifyContent="center"
      alignItems="center"
      g={3}>
      {data.map((card) => {
        const { id, text, img, name } = card;
        return (
          <Grid xs={12} sm={6} md={4} m={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
