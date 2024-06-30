import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  locales: locales,

  defaultLocale: "fi",
  localeDetection: false
});

export const config = {

  matcher: ["/", "/(en|fi)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};