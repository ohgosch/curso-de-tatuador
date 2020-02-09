import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Items, Item } from './style';

export const LessonIncluded = ({ title, included }) => (
  <Container>
    <Title>{title}</Title>
    <Items>
      {included.map(item => <Item key={item}>{item}</Item>)}
    </Items>
  </Container>
);

LessonIncluded.propTypes = {
  title: PropTypes.string.isRequired,
  included: PropTypes.arrayOf(PropTypes.string).isRequired,
};
