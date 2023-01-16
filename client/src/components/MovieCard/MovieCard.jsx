import React from "react";
import PropTypes from "prop-types";

import { CardMenu } from "./components";

import { styled } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

export const MovieCard = ({ movie, onCardSelect }) => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <CardMenu onCardSelect={onCardSelect} />
      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography mb="0" variant="subtitle1" gutterBottom component="div">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
};
