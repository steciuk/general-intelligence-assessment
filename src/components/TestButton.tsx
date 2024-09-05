import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@components/ui/button";
import React from "react";

const TestButton = (props: ButtonProps) => {
  const { className, ...restProps } = props;

  return <Button variant="outline" className={cn(className)} {...restProps} />;
};

export default TestButton;
