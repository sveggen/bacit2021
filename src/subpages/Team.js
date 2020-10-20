import React from "react"
import TeamItem from "../components/TeamItem"
import { useStaticQuery, graphql } from "gatsby"

function Team() {
  const { allTeamYaml } = useStaticQuery(graphql`
    {
      allTeamYaml {
        edges {
          node {
            name
            img
            text
            linkedin
          }
        }
      }
    }
  `)
  return (
    <div id = "team" className="container-fluid" style={{ backgroundColor: "#FFCD6C" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Møt vårt team </h1>
          <div className="text-center row my-5">
            {allTeamYaml.edges.map(({ node }) => {
              return <TeamItem title={node.name} src={node.img} text={node.text} linkedin={node.linkedin} />
            })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Team
