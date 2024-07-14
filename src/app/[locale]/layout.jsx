import '../../styles/global.scss';
import Footer from "../../components/shared/Footer/Footer";
import Header from '../../components/shared/Header/Header';
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
import Query from '../../components/Provider/Query';


export const metadata = {
  title: "Ravintola Oda",
  description: "New Georgian Restaurant in Helsinki",
  icons: {
    icon: ["/images/logo.png"],
  },
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale === "fi" ? "su" : locale}>
      <body>
        <div className="wrapper">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Query>
            <Header />
            {children}
            <Footer />
        </Query>
        </NextIntlClientProvider>
        </div>
        <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
            <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          // color="#ff62ce"
          // height={2}
          // showSpinner={false}
          // easing="ease"
          // speed={200}
          // shadow="0 0 10px #ff62ce,0 0 5px #ff62ce"
        />
      </body>
    </html>
  );
}