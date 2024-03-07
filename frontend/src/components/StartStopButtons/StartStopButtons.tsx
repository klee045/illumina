import { Button, Grid } from "@mui/material";
import React from "react";

const StartStopButtons: ({
  hasGameStarted,
  setHasGameStarted,
  setScore,
}: {
  hasGameStarted: boolean;
  setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) => JSX.Element = ({ hasGameStarted, setHasGameStarted, setScore }) => {
  return (
    <React.Fragment>
      <Grid item>
        <Button
          variant="contained"
          color="success"
          disabled={hasGameStarted}
          sx={{ width: "100px" }}
          onClick={() => {
            setHasGameStarted(true);
            setScore(0);
          }}
        >
          START
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          color="error"
          disabled={!hasGameStarted}
          sx={{ width: "100px" }}
          onClick={() => {
            setHasGameStarted(false);
          }}
        >
          STOP
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default StartStopButtons;
