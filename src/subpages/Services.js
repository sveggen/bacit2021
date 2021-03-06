import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"


function Services() {

  const { allServicesYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            title
            src
            content
          }
        }
      }
    }
  `)

  return (
    <div
      id="services"
      className="container-fluid"
      style={{ backgroundColor: "#FFCD6C" }}
    >
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Hvem er vi?</h1>
          <Fade right>
          </Fade>
          <div className="text-center row">
            {allServicesYaml.edges.map(({ node }) => {
              return <ServiceItem title={node.title} src={node.src} content={node.content} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
