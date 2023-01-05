import React from "react";

import { CardMenu } from "./components";

import { styled } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

export const MovieCard = () => {
  const onAddClick = (movie) => alert("movie is added");
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <CardMenu onAddClick={onAddClick} />
      <CardMedia
        component="img"
        height="250"
        image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nTTR524PBfs1iE0MC2aMQK2ZeYc.jpg"
        alt="Paella dish"
      />
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          Sonic the Hedgehog
        </Typography>
        <Typography mb="0" variant="subtitle1" gutterBottom component="div">
          Apr 08, 2022
        </Typography>
      </CardInfo>
    </Card>
  );
};
