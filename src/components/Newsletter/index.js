import React, { useState } from "react"

import { Container, Send, Form } from "./style"
import { Section } from "../Section"
import { Input } from "../../styles/input"
import { newsletter } from "../../utils/texts"
import { Alert } from "../../utils/alert"
import { ERROR_TYPE } from "../../utils/constants"

export const Newsletter = () => {
  // Inputs state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsApp, setWhatsApp] = useState("")

  // Form state
  const [error, setError] = useState(false)
  const [errorType, setErrorType] = useState()
  const [success] = useState(false)
  const [loading] = useState(false)

  const disabled = success || loading

  const canRequest = () => name && (whatsApp || email)

  const formTrigger = event => {
    event.preventDefault()

    if (!canRequest()) {
      setErrorType(ERROR_TYPE.VALUES)
      return setError(true)
    }

    clear()
  }

  const clear = () => {
    setName("")
    setEmail("")
    setWhatsApp("")
  }

  return (
    <Section title={newsletter.title} small={true}>
      <Container>
        <Form onSubmit={formTrigger}>
          <Input
            disabled={disabled}
            placeholder={newsletter.name}
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            required
          />
          <Input
            disabled={disabled}
            placeholder={newsletter.email}
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Input
            disabled={disabled}
            placeholder={newsletter.whatsapp}
            type="tel"
            value={whatsApp}
            onChange={({ target: { value } }) => setWhatsApp(value)}
          />
          <Send disabled={disabled} as="button">
            {newsletter.send}
          </Send>
        </Form>
        {error && <Alert>{newsletter.error[errorType]}</Alert>}
        {success && <Alert>{newsletter.success}</Alert>}
      </Container>
    </Section>
  )
}
