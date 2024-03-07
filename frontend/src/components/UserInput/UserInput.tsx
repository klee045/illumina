import { TextField } from "@mui/material";
import React from "react";
import CardNumber from "../../common/models/CardNumber";
import generateNumbers from "../../utils/generateNumbers";

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
}) => {
  return (
    <React.Fragment>
      <TextField
        id="outlined-basic"
        label="Answer"
        variant="outlined"
        value={userAnswer}
        error={isAnswerWrong}
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
              // check if answer is right and update score then generate new numbers
              const product: number = numberOne * numberTwo;

              if (Number(userAnswer) === product) {
                setIsAnswerWrong(false);
                setScore(score + 1);
                generateNumbers().then((cardNumber: CardNumber) => {
                  setNumberOne(cardNumber.numberOne);
                  setNumberTwo(cardNumber.numberTwo);
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
