import React from 'react';

import { Container, Side, SocialMedia, Wrapper } from "./style";
import { footer } from '../../utils/texts';

export const Footer = () => (
  <Container>
    <Wrapper>
      <Side>{footer.copyright}</Side>
      <Side>
        <SocialMedia media="facebook" href="#" title="Facebook">Facebook</SocialMedia>
        <SocialMedia media="twitter" href="#" title="Twitter">Twitter</SocialMedia>
      </Side>
    </Wrapper>
  </Container>
);
