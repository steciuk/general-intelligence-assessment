import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@components/ui/button";

const TestButton = (props: ButtonProps) => {
  const { className, onClick, ...restProps } = props;

  return (
    <Button
      variant="outline"
      className={cn(className)}
      {...restProps}
      onClick={(e) => {
        // ponytail: ignore 2nd+ click of a double/triple-click (detail > 1).
        // Ceiling: won't catch two separate single clicks; upgrade = question-scoped lock.
        if (e.detail > 1) return;
        onClick?.(e);
      }}
    />
  );
};

export default TestButton;
