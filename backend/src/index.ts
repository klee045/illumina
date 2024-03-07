import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import CardNumber from "./common/models/CardNumber";
import Operation from "./common/models/Operation";
import NumberGeneratorService from "./services/NumberGeneratorService/NumberGeneratorService";
import OperationGeneratorService from "./services/OperationGeneratorService/OperationGeneratorService";

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

/**
 * Operation Routes
 */
app.get("/operation", (req: Request, res: Response<Operation>) => {
  const operation = OperationGeneratorService.generateOperation();

  return res.status(200).json({ operation: operation });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
