import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'



function Footer() {
  return (
    <div>
      <footer className="py-2" style={{ backgroundColor: "#2E4057" }}>
        <div className="container">
          <p className="float-right">transform it | © Copyright 2020</p>
          <div className="freepik">
            Ikoner laget av{" "}
            <a
              href="https://www.freepik.com/?__hstc=57440181.5efde453cddf611e3269badc0f78e347.1563446622471.1563446622471.1563458509765.2&__hssc=57440181.1.1563458509765&__hsfp=226280184"
              title="Freepik"
            >
              Freepik
           </a>
            <br />
            <br />
            <br />
            <div className="text-center">
            <ul class="nav-item">
              <AnchorLink class="nav-link" href="#home">Til toppen
              </AnchorLink>
            </ul>
            </div>
            <br />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
