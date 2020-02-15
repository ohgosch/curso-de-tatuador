import React from 'react';

import { Section } from '../Section';
import { Container, Side, Name, Description } from './style';
import { location } from '../../utils/texts';
import { Map } from './Map';

import background from '../../images/Local background.png';

export const Location = () => (
  <Section title={location.title} backgroundImage={background}>
    <Container>
      <Side>
        <Map />
      </Side>
      <Side>
        <Name>{location.name}</Name>
        <Description>{location.description1}</Description>
        <Description>{location.description2}</Description>
        <Description>{location.description3}</Description>
      </Side>
    </Container>
  </Section>
);
