import * as React from "react";

interface Props {
  requestStatus: number;
}

const ServerError: React.FunctionComponent<Props> = (props: Props) => {
  const {requestStatus} = props;

  return (
    <p>Error: {requestStatus}</p>
  );
};

export default ServerError;
