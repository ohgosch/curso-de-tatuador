import React from "react"

import { Container, Side, SocialMedia, Wrapper } from "./style"
import { footer } from "../../utils/texts"

export const Footer = () => (
  <Container>
    <Wrapper>
      <Side>{footer.copyright}</Side>
      <Side>
        <SocialMedia
          target="_BLANK"
          media="facebook"
          href="https://www.facebook.com/SantaMadreTattooShop/"
          title="Facebook"
        >
          Facebook
        </SocialMedia>
        <SocialMedia
          target="_BLANK"
          media="instagram"
          href="https://www.instagram.com/SantaMadreInk/"
          title="Instagram"
        >
          Instagram
        </SocialMedia>
      </Side>
    </Wrapper>
  </Container>
)
