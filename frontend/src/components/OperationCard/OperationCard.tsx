import React from "react";
import CardDisplay from "../CardDisplay/CardDisplay";

const Operation: ({ operation }: { operation: string }) => JSX.Element = ({
  operation,
}) => {
  return (
    <React.Fragment>
      <CardDisplay char={operation} xs={1} />
    </React.Fragment>
  );
};

export default Operation;
