import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./MainPage.css";
import NumberCard from "../NumberCard/NumberCard";
import { generateNumber } from "../../utils/generateNumber";

const MainPage: () => JSX.Element = () => {
  const [numberOne, setNumberOne] = useState<number>(0);
  const [numberTwo, setNumberTwo] = useState<number>(0);

  useEffect(() => {
    setNumberOne(generateNumber());
    setNumberTwo(generateNumber());
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        height={"100vh"}
        maxHeight={"100vh"}
        justifyContent={"space-between"}
        textAlign={"center"}
        gap={2}
        direction={"column"}
        padding={5}
      >
        <Grid item>
          <Typography variant="h2">Flash Card Game</Typography>
        </Grid>

        <Grid item container justifyContent={"center"} gap={2} height={"50vh"}>
          {numberOne >= 0 && <NumberCard num={numberOne} />}
          {numberTwo >= 0 && <NumberCard num={numberTwo} />}
        </Grid>

        <Grid item>
          <TextField id="outlined-basic" label="Answer" variant="outlined" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainPage;
