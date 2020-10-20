import React from "react"
import "../global.css"
import LandingPage from "../subpages/LandingPage";
import Services from "../subpages/Services";
import Team from "../subpages/Team";
import End from "../subpages/End";
import Footer from "../components/Footer";
import PCImage from "../subpages/PCImage";
import { Helmet } from "react-helmet"

function Index() {
  return (
    <div>
       <Helmet>
          <meta charSet="utf-8" />
          <title>transform it</title>
        </Helmet>
      <LandingPage/>
      <Services/>
      <PCImage />
      <Team/>
      <End/>
      <Footer/>
    </div>
  )
}

export default Index
