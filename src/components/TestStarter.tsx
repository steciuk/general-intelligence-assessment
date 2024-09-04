import Numbers from "@components/Numbers";
import Perceptual from "@components/Perceptual";
import Reasoning from "@components/Reasoning/Reasoning";
import Test from "@components/Test";
import Words from "@components/Words/Words";
import React from "react";

const TestStarter = () => {
  return (
    <>
      <Test>{(props) => <Reasoning {...props} />}</Test>
      <Test>{(props) => <Perceptual {...props} />}</Test>
      <Test>{(props) => <Numbers {...props} />}</Test>
      <Test>{(props) => <Words {...props} />}</Test>
    </>
  );
};

export default TestStarter;
