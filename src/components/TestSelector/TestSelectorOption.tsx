import type { TestName } from "@components/types";
import { Button } from "@components/ui/button";
import { Card, CardHeader, type CardProps } from "@components/ui/card";
import { Checkbox } from "@components/ui/checkbox";
import { Label } from "@components/ui/label";
import { type CheckedState } from "@radix-ui/react-checkbox";
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const TestSelectorOption = React.forwardRef<
  HTMLDivElement,
  {
    name: TestName;
    selected: boolean;
    onValueChange: (name: string, selected: boolean) => void;
    onMoveUp: (name: string) => void;
    onMoveDown: (name: string) => void;
    upDisabled?: boolean;
    downDisabled?: boolean;
  } & CardProps
>((props, ref) => {
  const {
    name,
    selected,
    onValueChange,
    onMoveUp,
    onMoveDown,
    upDisabled,
    downDisabled,
    ...restProps
  } = props;

  const onCheckedChange = (checked: CheckedState) => {
    if (typeof checked === "boolean") {
      onValueChange(name, checked);
    }
  };

  return (
    <Card {...restProps} ref={ref}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3">
        <Label className="flex cursor-pointer items-center gap-4 text-lg">
          <Checkbox checked={selected} onCheckedChange={onCheckedChange} />
          <div>{name}</div>
        </Label>
        <div>
          <Button
            size="icon"
            disabled={upDisabled}
            onClick={() => onMoveUp(name)}
            variant="ghost"
          >
            <ArrowUp />
          </Button>
          <Button
            size="icon"
            disabled={downDisabled}
            onClick={() => onMoveDown(name)}
            variant="ghost"
          >
            <ArrowDown />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
});

TestSelectorOption.displayName = "TestSelectorOption";
export default TestSelectorOption;
