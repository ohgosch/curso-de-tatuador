import React from 'react';
import { Container, Send, Form } from './style';
import { Section } from '../Section';
import { Input } from '../../styles/input';
import { newsletter } from '../../utils/texts';
import { Alert } from '../../utils/alert';

export const Newsletter = () => (
  <Section title={newsletter.title} small={true}>
    <Container>
      <Form>
        <Input placeholder={newsletter.name} type="text" />
        <Input placeholder={newsletter.email} type="email" />
        <Input placeholder={newsletter.whatsapp} type="phone" />
        <Send as="button">{newsletter.send}</Send>
      </Form>
      <Alert>{newsletter.error.values}</Alert>
    </Container>
  </Section>
);
