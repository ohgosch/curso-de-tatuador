import React from "react"
import { scroller } from "react-scroll"

import { Container, Content, Description, Button, Title } from "./style"
import Logo from "../../images/Logo.png"
import { main } from "../../utils/texts"
import { FIRST_NEWSLETTER_NAME } from "../../utils/constants"

export const Main = () => {
  const scrollToNewsletter = () => {
    scroller.scrollTo(FIRST_NEWSLETTER_NAME, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    })
  }

  return (
    <Container>
      <Content>
        <Title>{main.title}</Title>
        <img src={Logo} alt={main.logoAlt} />
        <Description>{main.description}</Description>
        <Button onClick={scrollToNewsletter}>{main.button}</Button>
      </Content>
    </Container>
  )
}

export default Main
