import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  const textStyle = {
    color: "#FFA800",
    fontWeight: "600",
    letterSpacing: "0.1em",
  }
  
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-light   p-4">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <AnchorLink class="nav-link" href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                Hjem <span class="sr-only">(current)</span>
              </AnchorLink>
            </li>
            <li class="nav-item" >
              <AnchorLink class="nav-link" href="#services" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                Hvem er vi?
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#team" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                Teamet
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#end" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                Kontakt Oss
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark">
        <h4 style={textStyle}>transform it</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  )
}

export default Navbar
