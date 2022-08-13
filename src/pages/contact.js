import React, { useState, useRef } from "react"
import { RiSendPlaneLine } from "react-icons/ri"
import {
  GrammarlyEditorPlugin,
  GrammarlyButton,
} from "@grammarly/editor-sdk-react"
import emailjs from "@emailjs/browser"

// RiSendPlaneLine

import * as style from "../../style/contact.module.scss"

const Contact = () => {
  const [spin, setSpin] = useState(false)
  const form = useRef()

  const submitFun = e => {
    e.preventDefault()
    setSpin(true)

    emailjs
      .sendForm(
        "service_kicz1ac",
        "template_w8fzyct",
        form.current,
        "txe5qbvJAVj-ysEgm"
      )
      .then(
        result => {
          console.log(result.text)
          setSpin(false)
        },
        error => {
          setSpin(false)
          console.log(error.text)
        }
      )
    form.current.reset()
  }

  return (
    // id = contact (for smooth scrolling)

    <div id="contact" className={[style.contact_container,'bg_clr'].join(' ')}>
      <div className="center_title">
        <div className="title_text">
          <h1>contact</h1>
          <div className="uderline"></div>
        </div>
      </div>
      {/* contact form */}

      <form
        ref={form}
        onSubmit={submitFun}
        className={style.form}
      >
        <fieldset className={style.fieldset}>
          <legend className={style.legend}>email me</legend>
          <div className={style.formWrapper}>
            <div>
              <label htmlFor="user_name">your name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                placeholder="name"
              />
            </div>
            <div>
              <label htmlFor="user_email">your email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="email"
              />
            </div>
            <div style={{ position: "relative" }}>
              <label htmlFor="message">message</label>
              <GrammarlyEditorPlugin
                clientId="client_9m1fYK3MPQxwKsib5CxtpB"
                style={{ position: "relative" }}
              >
                <textarea
                  rows="8"
                  name="message"
                  id="message"
                  placeholder="message..."
                  required
                />
                <GrammarlyButton
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                    overflow: "hidden",
                  }}
                ></GrammarlyButton>
              </GrammarlyEditorPlugin>
            </div>
            <div className={style.btn_container}>
              <button
                className={style.button}
                type="submit"
                disabled={!spin ? false : true}
              >
                {!spin ? (
                  <>
                    <span className={style.sending_container}>
                      <RiSendPlaneLine fontSize={22} color="#555" />
                      <span style={{ color: "#fff" }}>send</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className={style.sending_container}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="22"
                        height="22"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="#555"
                          stroke-linecap="round"
                          stroke-width="2"
                        >
                          <path
                            stroke-dasharray="60"
                            stroke-dashoffset="60"
                            stroke-opacity=".3"
                            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="1.3s"
                              values="60;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="15"
                            stroke-dashoffset="15"
                            d="M12 3C16.9706 3 21 7.02944 21 12"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.3s"
                              values="15;0"
                            />
                            <animateTransform
                              attributeName="transform"
                              dur="1.5s"
                              repeatCount="indefinite"
                              type="rotate"
                              values="0 12 12;360 12 12"
                            />
                          </path>
                        </g>
                      </svg>
                      <span style={{ color: "#fff" }}>sending...</span>
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Contact
