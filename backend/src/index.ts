import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import CardNumber from "./common/models/CardNumber";
import NumberGeneratorService from "./services/NumberGeneratorService/NumberGeneratorService";

const app: Express = express();
dotenv.config();

const port: string | 4000 = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

/**
 * Card Numbers Routes
 */
app.get("/card_numbers", (req: Request, res: Response<CardNumber>) => {
  const numberOne = NumberGeneratorService.generateNumber();
  const numberTwo = NumberGeneratorService.generateNumber();

  return res.status(200).json({ numberOne: numberOne, numberTwo: numberTwo });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
