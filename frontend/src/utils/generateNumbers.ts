import axios, { AxiosResponse } from "axios";
import CardNumber from "../common/models/CardNumber";

const generateNumbers: () => Promise<CardNumber> = async () => {
  const {
    data: { numberOne, numberTwo },
  } = await axios.get(`http://localhost:4000/card_numbers`);

  return { numberOne: numberOne, numberTwo: numberTwo };
};

export default generateNumbers;
