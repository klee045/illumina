import React from "react";
import CardDisplay from "../CardDisplay/CardDisplay";

const Operator: ({ operator }: { operator: string }) => JSX.Element = ({
  operator,
}) => {
  return (
    <React.Fragment>
      <CardDisplay char={operator} xs={1} />
    </React.Fragment>
  );
};

export default Operator;
