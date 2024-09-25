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
import React, { useContext } from "react";
import { TestName } from "@components/TestApp/types";
import TestSelectorOption from "@components/TestApp/TestSelector/TestSelectorOption";
import { LocaleContext } from "@/contexts/LocaleContext";
import { i18n } from "@/i18n";

export type TestOption = {
  name: TestName;
  selected: boolean;
};

const TestSelector = (props: {
  testOptions: TestOption[];
  setTestOptions: (options: TestOption[]) => void;
  onStartTest: () => void;
}) => {
  const locale = useContext(LocaleContext);
  const t = i18n(locale, "test-selector");

  const { testOptions, setTestOptions, onStartTest } = props;

  const [lastMovedUp, setLastMovedUp] = React.useState<string | null>(null);
  const [lastMovedDown, setLastMovedDown] = React.useState<string | null>(null);

  const onValueChange = (name: string, selected: boolean) => {
    const newTestOptions = testOptions.map((option) =>
      option.name === name ? { ...option, selected } : option,
    );
    setTestOptions(newTestOptions);
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
    const newTestOptions =
      allSelected === true
        ? testOptions.map((option) => ({ ...option, selected: false }))
        : testOptions.map((option) => ({ ...option, selected: true }));

    setTestOptions(newTestOptions);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
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
          <Checkbox checked={allSelected} onCheckedChange={onSelectAllChange} />
          <div>{t("select-all")}</div>
        </Label>
        <Button disabled={allSelected === false} onClick={onStartTest}>
          {t("start")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TestSelector;
