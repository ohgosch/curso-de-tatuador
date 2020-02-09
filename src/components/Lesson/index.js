import React from 'react';

import { Section } from '../Section';
import { lesson } from '../../utils/texts';
import { Container } from './style';

import background from '../../images/Aulas background.png';
import { LessonIncluded } from './LessonIncluded';

export const Lesson = () => (
  <Section title={lesson.title} backgroundImage={background}>
    <Container>
      <LessonIncluded title={lesson.individual.title} included={lesson.individual.included} />
      <LessonIncluded title={lesson.intensive.title} included={lesson.intensive.included} />
    </Container>
  </Section>
)
