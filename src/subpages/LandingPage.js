import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    backgroundImage:
      "url(https://res.cloudinary.com/dxs9fgwzu/image/upload/v1603118668/nettsted/IMG_1335_kqtwmh.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  return (
    <section id = "home" style={pageStyle} className = "container-fluid">
      <div className="container">
        <Navbar />
        <div className="lowerLeftItems">
         <h3 style={welcomeStyle}>{welcomeText}</h3>
          <h5>{landingText}</h5>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
