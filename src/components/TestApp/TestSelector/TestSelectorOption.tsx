import { LocaleContext } from "@/contexts/LocaleContext";
import { i18n } from "@/i18n";
import type { TestName } from "@components/TestApp/types";
import { Button } from "@components/ui/button";
import { Card, CardHeader, type CardProps } from "@components/ui/card";
import { Checkbox } from "@components/ui/checkbox";
import { Label } from "@components/ui/label";
import { type CheckedState } from "@radix-ui/react-checkbox";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useContext } from "react";

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

  const locale = useContext(LocaleContext);
  const t = i18n(locale);

  const onCheckedChange = (checked: CheckedState) => {
    if (typeof checked === "boolean") {
      onValueChange(name, checked);
    }
  };

  return (
    <Card {...restProps} ref={ref}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3">
        <Label className="flex cursor-pointer items-center gap-4 md:text-lg">
          <Checkbox checked={selected} onCheckedChange={onCheckedChange} />
          <div>{t("test-names", name)}</div>
        </Label>
        <div className="flex gap-2">
          <Button
            size="icon"
            disabled={upDisabled}
            onClick={() => onMoveUp(name)}
            variant="ghost"
            className="h-8 w-8"
          >
            <ArrowUp />
          </Button>
          <Button
            size="icon"
            disabled={downDisabled}
            onClick={() => onMoveDown(name)}
            variant="ghost"
            className="h-8 w-8"
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
