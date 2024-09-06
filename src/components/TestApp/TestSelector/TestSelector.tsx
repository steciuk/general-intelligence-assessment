import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Checkbox } from "@components/ui/checkbox";
import { Label } from "@components/ui/label";
import type { CheckedState } from "@radix-ui/react-checkbox";
import "@components/TestApp/TestSelector/TestSelector.css";
import React from "react";
import { TestName } from "@components/TestApp/types";
import TestPerformer from "@components/TestApp/TestPerformer";
import { ArrowLeft } from "lucide-react";
import TestSelectorOption from "@components/TestApp/TestSelector/TestSelectorOption";

const TestSelector = () => {
  const [phase, setPhase] = React.useState<"select" | "test">("select");

  const [testOptions, setTestOptions] = React.useState([
    { name: TestName.REASONING, selected: true },
    { name: TestName.PERCEPTUAL_SPEED, selected: true },
    { name: TestName.NUMBERS_SPEED_AND_ACCURACY, selected: true },
    { name: TestName.WORDS_MEANING, selected: true },
    { name: TestName.SPATIAL_VISUALIZATION, selected: true },
  ]);
  const [lastMovedUp, setLastMovedUp] = React.useState<string | null>(null);
  const [lastMovedDown, setLastMovedDown] = React.useState<string | null>(null);

  const onValueChange = (name: string, selected: boolean) => {
    setTestOptions((options) =>
      options.map((option) =>
        option.name === name ? { ...option, selected } : option,
      ),
    );
  };

  const onMoveUp = (name: string) => {
    const index = testOptions.findIndex((option) => option.name === name);
    if (index === 0) return;

    setLastMovedUp(testOptions[index].name);
    setLastMovedDown(testOptions[index - 1].name);

    const newTestOptions = [...testOptions];
    [newTestOptions[index], newTestOptions[index - 1]] = [
      newTestOptions[index - 1],
      newTestOptions[index],
    ];
    setTestOptions(newTestOptions);
  };

  const onMoveDown = (name: string) => {
    const index = testOptions.findIndex((option) => option.name === name);
    if (index === testOptions.length - 1) return;

    setLastMovedUp(testOptions[index + 1].name);
    setLastMovedDown(testOptions[index].name);

    const newTestOptions = [...testOptions];
    [newTestOptions[index], newTestOptions[index + 1]] = [
      newTestOptions[index + 1],
      newTestOptions[index],
    ];
    setTestOptions(newTestOptions);
  };

  const numSelected = testOptions.filter((option) => option.selected).length;
  const allSelected: CheckedState =
    numSelected === testOptions.length
      ? true
      : numSelected === 0
        ? false
        : "indeterminate";

  const onSelectAllChange = () => {
    if (allSelected === true) {
      setTestOptions((options) =>
        options.map((option) => ({ ...option, selected: false })),
      );

      return;
    }

    setTestOptions((options) =>
      options.map((option) => ({ ...option, selected: true })),
    );
  };

  if (phase === "select")
    return (
      <section className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Select the tests you want to take</CardTitle>
          </CardHeader>
          <CardContent>
            {testOptions.map((option, i) => (
              <TestSelectorOption
                key={option.name}
                name={option.name}
                selected={option.selected}
                {...{ onValueChange, onMoveUp, onMoveDown }}
                upDisabled={i === 0}
                downDisabled={i === testOptions.length - 1}
                style={{
                  animation:
                    lastMovedUp === option.name
                      ? "slide-up 0.2s"
                      : lastMovedDown === option.name
                        ? "slide-down 0.2s"
                        : "none",
                }}
                onAnimationEnd={() => {
                  option.name === lastMovedDown && setLastMovedDown(null);
                  option.name === lastMovedUp && setLastMovedUp(null);
                }}
              />
            ))}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Label className="flex w-max cursor-pointer items-center gap-4">
              <Checkbox
                checked={allSelected}
                onCheckedChange={onSelectAllChange}
              />
              <div>Select all</div>
            </Label>
            <Button
              disabled={allSelected === false}
              onClick={() => setPhase("test")}
            >
              Start the tests
            </Button>
          </CardFooter>
        </Card>
      </section>
    );

  if (phase === "test")
    return (
      <section className="space-y-4">
        <Button
          onClick={() => setPhase("select")}
          size="icon"
          variant="outline"
        >
          <ArrowLeft />
        </Button>
        <TestPerformer
          tests={testOptions
            .filter((option) => option.selected)
            .map((option) => option.name)}
        />
      </section>
    );
};

export default TestSelector;
