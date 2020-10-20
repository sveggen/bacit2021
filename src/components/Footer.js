import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'



function Footer() {
  return (
    <div>
      <footer className="py-2" style={{ backgroundColor: "#2E4057" }}>
        <div className="container">
          <p className="float-right">transform it | © Copyright 2020</p>
          <div className="freepik">
            Icons made by{" "}
            <a
              href="https://www.freepik.com/?__hstc=57440181.5efde453cddf611e3269badc0f78e347.1563446622471.1563446622471.1563458509765.2&__hssc=57440181.1.1563458509765&__hsfp=226280184"
              title="Freepik"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
            <br />
            <br />
            <br />
            <div className="text-center">
            <ul class="nav-item">
              <AnchorLink class="nav-link" href="#home">
                Gå til toppen
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
