import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardNumber from "../../common/models/CardNumber";
import generateNumbers from "../../utils/generateNumbers";
import NumberCard from "../../components/NumberCard/NumberCard";
import OperatorCard from "../../components/OperatorCard/OperatorCard";
import UserInput from "../../components/UserInput/UserInput";
import "./MainPage.css";

const MainPage: () => JSX.Element = () => {
  const [numberOne, setNumberOne] = useState<number>(0);
  const [numberTwo, setNumberTwo] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isAnswerWrong, setIsAnswerWrong] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    generateNumbers().then((cardNumber: CardNumber) => {
      setNumberOne(cardNumber.numberOne);
      setNumberTwo(cardNumber.numberTwo);
    });
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
          <OperatorCard operator={"x"} />
          {numberTwo >= 0 && <NumberCard num={numberTwo} />}
        </Grid>

        <Grid item>
          <Typography variant="h2">Score: {score}</Typography>
        </Grid>

        <Grid item height={76} maxHeight={76}>
          <UserInput
            numberOne={numberOne}
            setNumberOne={setNumberOne}
            numberTwo={numberTwo}
            setNumberTwo={setNumberTwo}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            isAnswerWrong={isAnswerWrong}
            setIsAnswerWrong={setIsAnswerWrong}
            score={score}
            setScore={setScore}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainPage;
