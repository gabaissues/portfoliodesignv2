import React from "react";
import Head from "next/head";

import * as G from "../styles/InitialPage.styles";
import IProject from "../interfaces/projects";
import HeaderComponent from "../components/pages/Header";
import FormatationComponent from "../components/pages/Formatation";
import AboutComponent from "../components/pages/About";
import FooterComponent from "../components/global/Footer";

export const getServerSideProps = async () => {

  const data = await fetch("https://api.gabaissues.com/projects/listen")
  const res: IProject[] = await data.json();

  return {
    props: {
      projects: res
    }
  }

}

interface Props {
  projects: IProject[]
}

export default function Home({ projects}: Props) {
  return (
    <>
      <Head>
        <title>Gaba - Portfólio</title>
      </Head>
      <HeaderComponent projects={projects.filter(e => e.type === "design")} />
      <G.Main>
        <FormatationComponent />
        <AboutComponent />
      </G.Main>
      <FooterComponent />
    </>
  );
}
