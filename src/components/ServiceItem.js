import React from "react"
import Fade from "react-reveal/Fade"

function ServiceItem({ src, title, content }) {

  const style = {
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <Fade bottom>
      <div className="col-lg-3 my-4 col-sm-12">
        <img src={src} width="128px" alt="Ikon" style={style}/>
        <h3 className="mt-5">{title}</h3>
        <p>
         {content}
        </p>
      </div>
    </Fade>
  )
}

export default ServiceItem
