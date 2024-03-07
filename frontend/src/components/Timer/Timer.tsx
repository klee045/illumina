import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const Timer: ({
  hasGameStarted,
  setHasGameStarted,
}: {
  hasGameStarted: boolean;
  setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element = ({ hasGameStarted, setHasGameStarted }) => {
  const [minutes, setMinutes] = useState(1); // start at 1 minute
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (hasGameStarted) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setHasGameStarted(false);
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (hasGameStarted) {
      setMinutes(1);
      setSeconds(0);
    }
  }, [hasGameStarted]);

  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        gap={2}
      >
        <Grid item>
          <AccessTimeIcon fontSize="large" />
        </Grid>

        <Grid item>
          <Typography variant="h2">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Timer;
