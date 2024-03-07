import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CardDisplay: ({
  char,
  xs,
}: {
  char: string | number;
  xs?: number;
}) => JSX.Element = ({ char, xs }) => {
  return (
    <React.Fragment>
      <Grid
        item
        container
        xs={xs}
        className={typeof char === "string" ? "" : "card"} // if operator, don't have border
        justifyContent={"center"}
        alignItems={"center"} // justifyContent and alignItems here are for vertically aligning the numbers
      >
        <Box>
          <Typography variant="h1">{char}</Typography>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default CardDisplay;
