import React from "react"
import Fade from "react-reveal/Fade"

export default function End() {
  return (
    <div
      id="end"
      className="container-fluid"
      style={{ backgroundColor: "#7E57C2", color: "white" }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 className="text-center my-5">Kontakt oss</h1>
            <div className="text-center">
            <p>Dere kan kontakte oss via kontaktskjemaet under eller på epostadressen: 
            <a className="linkColor" href="mailto:mail@mail.com"> mail@mail.com</a> </p>
            </div>
            <form
              action="https://getform.io/f/7432f37c-dd0d-4aca-a522-8c8f5f8743ec"
              method="POST"
            >
              <div className="row my-4">
                <div className="col-lg-6 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder="Ditt Navn"
                    name="name"
                    required
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    className="inputBox"
                    placeholder="Din Epost"
                    name="email"
                    required
                  />
                </div>
              </div>
              <textarea
                rows="2"
                className="inputBox mb-4"
                placeholder="Din Melding"
                name="message"
                required
              />
              <div className="text-center">
              <button className="btn btn-lg btn-light mb-4 py-3">Send</button>
              </div>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  )
}
