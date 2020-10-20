import React from "react"
import { SocialIcon } from "react-social-icons"
import Fade from "react-reveal/Fade"

function TeamItem({ src, title, text, linkedin }) {
  return (
    <Fade bottom>
      <div className="col-lg-4 my-4 col-sm-12">
        <img src={src} className="img-fluid rounded-circle" width="200px" alt="Profil"/>
        <h3 className="mt-5">{title}</h3>
        <p>{text}</p>
        <SocialIcon className="mr-4" url={"http://linkedin.com/" + linkedin} />
      </div>
    </Fade>
  )
}

export default TeamItem
