import "../styles/globals.css";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Header } from "../components";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="h-screen overflow-y-scroll bg-slate-200">
        <Header />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
