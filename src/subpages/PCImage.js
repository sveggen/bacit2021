import React from "react"

export default function PCImage() {

    const pageStyle = {
        backgroundImage:
          "url(https://res.cloudinary.com/dxs9fgwzu/image/upload/v1603120870/nettsted/IMG_1387_khhrbz.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "white",
        backgroundColor: "#FFCD6C",
      }

      return (
        <section style={pageStyle} className = "container-fluid">
        </section>
      )
  }


