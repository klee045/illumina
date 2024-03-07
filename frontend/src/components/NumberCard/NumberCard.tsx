import React from "react";
import CardDisplay from "../CardDisplay/CardDisplay";

const NumberCard: ({ num }: { num: number }) => JSX.Element = ({ num }) => {
  return (
    <React.Fragment>
      <CardDisplay char={num} xs={5} />
    </React.Fragment>
  );
};

export default NumberCard;
