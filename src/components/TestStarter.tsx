import Reasoning from "@components/Reasoning/Reasoning";
import Test from "@components/Test";
import React from "react";

const TestStarter = () => {
  return <Test render={(props) => <Reasoning {...props} />} />;
};

export default TestStarter;
