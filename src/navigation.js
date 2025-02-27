import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { locales, pathnames } from "./i18n.js";

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });