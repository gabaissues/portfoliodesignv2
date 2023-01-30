import React from "react";
import Head from "next/head";

import * as G from "../styles/InitialPage.styles";
import HeaderComponent from "@/components/pages/Header";
import FormatationComponent from "@/components/pages/Formatation";
import AboutComponent from "@/components/pages/About";
import FooterComponent from "@/components/global/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HeaderComponent />
      <G.Main>
        <FormatationComponent />
        <AboutComponent />
      </G.Main>
      <FooterComponent />
    </>
  );
}
