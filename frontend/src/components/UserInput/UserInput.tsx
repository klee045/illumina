import { TextField } from "@mui/material";
import React from "react";
import CardNumber from "../../common/models/CardNumber";
import generateNumbers from "../../utils/generateNumbers";
import generateOperation from "../../utils/generateOperation";
import Operation from "../../common/models/Operation";

const UserInput: ({
  numberOne,
  setNumberOne,
  numberTwo,
  setNumberTwo,
  userAnswer,
  isAnswerWrong,
  setIsAnswerWrong,
  score,
  setScore,
  hasGameStarted,
  operation,
  setOperation,
}: {
  numberOne: number;
  setNumberOne: React.Dispatch<React.SetStateAction<number>>;
  numberTwo: number;
  setNumberTwo: React.Dispatch<React.SetStateAction<number>>;
  userAnswer: string;
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
  isAnswerWrong: boolean;
  setIsAnswerWrong: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  hasGameStarted: boolean;
  operation: string;
  setOperation: React.Dispatch<React.SetStateAction<string>>;
}) => JSX.Element = ({
  numberOne,
  setNumberOne,
  numberTwo,
  setNumberTwo,
  userAnswer,
  setUserAnswer,
  isAnswerWrong,
  setIsAnswerWrong,
  score,
  setScore,
  hasGameStarted,
  operation,
  setOperation,
}) => {
  return (
    <React.Fragment>
      <TextField
        id="outlined-basic"
        label="Answer"
        variant="outlined"
        value={userAnswer}
        error={isAnswerWrong}
        disabled={!hasGameStarted}
        helperText={isAnswerWrong ? "Incorrect" : ""}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setUserAnswer(e.target.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            // check if user is pressing Enter without providing an answer
            if (userAnswer !== "") {
              let correctAnswer: number = 0;
              // check if answer is right and update score then generate new numbers
              switch (operation) {
                case "+":
                  correctAnswer = numberOne + numberTwo;
                  break;
                case "-":
                  correctAnswer = numberOne - numberTwo;
                  break;
                case "x":
                  correctAnswer = numberOne * numberTwo;
                  break;
                case "÷":
                  correctAnswer = numberOne / numberTwo;
                  break;
              }

              if (Number(userAnswer) === correctAnswer) {
                setIsAnswerWrong(false);
                setScore(score + 1);
                generateNumbers().then((cardNumber: CardNumber) => {
                  setNumberOne(cardNumber.numberOne);
                  setNumberTwo(cardNumber.numberTwo);
                });
                generateOperation().then((operation: Operation) => {
                  setOperation(operation.operation);
                });
              } else {
                setIsAnswerWrong(true);
                setScore(score - 1);
              }
            }

            // reset field
            setUserAnswer("");
          }
        }}
      />
    </React.Fragment>
  );
};

export default UserInput;
