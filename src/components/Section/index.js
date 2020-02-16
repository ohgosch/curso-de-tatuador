import React from "react"
import PropTypes from "prop-types"

import { Container, Children } from "./style"
import { Wrapper } from "../../styles/wrapper"
import { Title } from "../../styles/title"

export const Section = ({ children, title, small, backgroundImage }) => (
  <Container backgroundImage={backgroundImage}>
    <Wrapper>
      {!!title && <Title small={small}>{title}</Title>}
      <Children>{children}</Children>
    </Wrapper>
  </Container>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  small: PropTypes.bool,
  backgroundImage: PropTypes.string,
}

Section.defaultProps = {
  small: false,
  title: "",
  backgroundImage: "",
}
