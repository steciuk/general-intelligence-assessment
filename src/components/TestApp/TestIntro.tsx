import { LocaleContext } from "@/contexts/LocaleContext";
import { i18n } from "@/i18n";
import type { TestName } from "@components/TestApp/types";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import React, { useContext } from "react";

const TestIntro = (props: {
  testName: TestName;
  children: React.ReactNode;
  onStartTest: () => void;
}) => {
  const { testName, children, onStartTest } = props;
  const locale = useContext(LocaleContext);
  const t = i18n(locale);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("test-names", testName)}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={onStartTest}>{t("test-intro", "cta")}</Button>
      </CardFooter>
    </Card>
  );
};

export default TestIntro;
