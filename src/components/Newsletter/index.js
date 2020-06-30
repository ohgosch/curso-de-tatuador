import React, { useState } from "react"
import PropTypes from "prop-types"

import { Container, Send, Form } from "./style"
import { Section } from "../Section"
import { Input } from "../../styles/input"
import { newsletter } from "../../utils/texts"
import { Alert } from "../../utils/alert"
import { ERROR_TYPE } from "../../utils/constants"
import { sendMail } from "../../utils/send-mail"

export const Newsletter = ({ name: nameProp }) => {
  // Inputs state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsApp, setWhatsApp] = useState("")

  // Form state
  const [error, setError] = useState(false)
  const [errorType, setErrorType] = useState()
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const disabled = success || loading

  const canRequest = () => name && (whatsApp || email)

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const formTrigger = async event => {

    if (!canRequest()) {
      setErrorType(ERROR_TYPE.VALUES)
      return setError(true)
    }

    try {
      setLoading(true)
      const data = { "form-name": "contact", name, email, whatsApp }
      fetch("/", {
        method: "POST",
        // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
        body: encode(data)
      })
        .then(() => console.log('deu certo'))
        .catch(error => console.log('deu ruim :('));
      setLoading(false)
      event.preventDefault()

      if (!success) {
        setErrorType(ERROR_TYPE.NETWORK)
        setLoading(false)
        return setError(true)
      }
      setSuccess(true)
      setError(false)
      clear()
    } catch {
      setErrorType(ERROR_TYPE.NETWORK)
      setLoading(false)
      return setError(true)
    }
  }

  const clear = () => {
    setName("")
    setEmail("")
    setWhatsApp("")
  }

  return (
    <Section title={newsletter.title} small={true}>
      <Container name={nameProp}>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  <input type="hidden" name="bot-field" />  <input type="hidden" name="form-name" value="contact" />  <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </Container>
    </Section>
  )
}

Newsletter.propTypes = {
  name: PropTypes.string,
}

Newsletter.defaultProps = {
  name: "",
}
