import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";


export const locales = ["en", "fi"];

export default getRequestConfig(async ({ locale }) => {

  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});


export const pathnames = {
  "/": "/",
};