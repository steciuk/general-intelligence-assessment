import { DEFAULT_LOCALE, type Locale } from "@/i18n";
import { createContext } from "react";

export const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);
