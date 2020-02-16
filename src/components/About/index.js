import React from "react"

import { Section } from "../Section"
import { about } from "../../utils/texts"
import { Container, Description, Side, Image } from "./style"

import Photo from "../../images/Sobre o curso thumb.png"

export const About = () => (
  <Section title={about.title}>
    <Container>
      <Side>
        <Description>{about.description}</Description>
        <Description>{about.descriptionLine}</Description>
      </Side>
      <Side>
        <Image src={Photo} />
      </Side>
    </Container>
  </Section>
)
