import Numbers from "@components/Numbers";
import Perceptual from "@components/Perceptual";
import Reasoning from "@components/Reasoning/Reasoning";
import Test from "@components/Test";
import Words from "@components/Words/Words";
import React from "react";

const TestStarter = () => {
  return (
    <>
      <Test render={(props) => <Reasoning {...props} />} />
      <Test render={(props) => <Perceptual {...props} />} />
      <Test render={(props) => <Numbers {...props} />} />
      <Test render={(props) => <Words {...props} />} />
    </>
  );
};

export default TestStarter;
