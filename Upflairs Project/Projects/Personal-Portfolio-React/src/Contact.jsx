import React from 'react'

function Contact() {
  return (
    <>
      <section className="section1">
        <div className="section1-box1">
          <div id="mainheaading">
            <div id="bluebox" />
            <h1 className="contact">Let's talk</h1>
          </div>
        </div>
        <div className="box-form">
          <label htmlFor="First Name">First Name</label>
          <label htmlFor="Last Name" className="last-name">
            Last Name
          </label>
          <br />
          <br />
          <input type="text" required="" className="input-design1" id="First Name" />
          <input
            type="text"
            required=""
            className="input-last-name input-design1"
            id="Last Name"
          />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="Email">Email</label>
          <br />
          <br />
          <input
            type="email"
            required=""
            name=""
            id="Email"
            className="input-design2"
          />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="Subject">Subject</label>
          <br />
          <br />
          <input type="text" required="" className="input-design2" id="Subject" />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="Message">Message</label>
          <br />
          <br />
          <textarea
            name=""
            required=""
            id="Message"
            className="input-design2"
            rows={6}
            defaultValue={""}
          />
          <br />
          <br />
          <button className="send-but">SEND</button>
        </div>
      </section>

    </>
  )
}

export default Contact