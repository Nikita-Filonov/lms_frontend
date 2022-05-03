import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export const CourseCard = ({course}) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{maxWidth: 345}}>
        <CardMedia
          component="img"
          height="140"
          image="https://miro.medium.com/max/1075/0*a-6XePXYuq-YSGT0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Preview</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
