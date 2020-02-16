import styled, { css } from "styled-components"
import PropTypes from "prop-types"

export const Container = styled.section`
  padding: 30px;
  overflow: hidden;
  width: 100%;

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
    background-image: url('${backgroundImage}');
  `}
`

export const Children = styled.div`
  margin-top: 20px;
`

Container.propTypes = {
  backgroundImage: PropTypes.string,
}

Container.defaultProps = {
  backgroundImage: "",
}
