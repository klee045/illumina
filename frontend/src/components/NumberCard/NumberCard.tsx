import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const NumberCard: ({ num }: { num: number }) => JSX.Element = ({ num }) => {
  return (
    <React.Fragment>
      <Grid
        item
        container
        xs={5}
        className="card"
        justifyContent={"center"}
        alignItems={"center"} // justifyContent and alignItems here are for vertically aligning the numbers
      >
        <Box>
          <Typography variant="h1">{num}</Typography>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default NumberCard;
