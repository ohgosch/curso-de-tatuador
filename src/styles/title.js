import styled, { css } from "styled-components";
import PropTypes from 'prop-types';

export const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  cursor: default;
  
  ${p => p.small ? css`
  font-size: 30px;
  line-height: 40px;
  ` : css`
    font-size: 36px;
    line-height: 47px;
  `}
`;

Title.propTypes = {
  small: PropTypes.bool,
};

Title.defaultProps = {
  small: false,
};
