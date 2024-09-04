import Perceptual from "@components/Perceptual";
import Reasoning from "@components/Reasoning/Reasoning";
import Test from "@components/Test";
import React from "react";

const TestStarter = () => {
  return (
    <>
      <Test render={(props) => <Reasoning {...props} />} />
      <Test render={(props) => <Perceptual {...props} />} />
    </>
  );
};

export default TestStarter;
