import axios from "axios";
import Operation from "../common/models/Operation";

const generateOperation: () => Promise<Operation> = async () => {
  const {
    data: { operation },
  } = await axios.get(`http://localhost:4000/operation`);

  return { operation: operation };
};

export default generateOperation;
