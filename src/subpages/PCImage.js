import React from "react"

export default function PCImage() {

    const pageStyle = {
        backgroundImage:
          "url(https://res.cloudinary.com/dxs9fgwzu/image/upload/v1603120870/nettsted/IMG_1387_khhrbz.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "multiply",
      }

      return (
        <section style={pageStyle} className = "container-fluid">
          <div className="container">
          </div>
        </section>
      )
  }


