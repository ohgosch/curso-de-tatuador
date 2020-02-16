import React from "react"

import { Container, Content, Description, Button, Title } from "./style"
import Logo from "../../images/Logo.png"
import { main } from "../../utils/texts"

export const Main = () => (
  <Container>
    <Content>
      <Title>{main.title}</Title>
      <img src={Logo} alt={main.logoAlt} />
      <Description>{main.description}</Description>
      <Button>{main.button}</Button>
    </Content>
  </Container>
)

export default Main
