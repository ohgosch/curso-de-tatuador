import styled, { css } from "styled-components"
import { desktop, mobileTablet } from "../../styles/medias"

export const Container = styled.div`
  display: grid;

  ${desktop(css`
    grid-template-columns: 1fr 1fr;
  `)}

  ${mobileTablet(css`
    grid-gap: 60px;
  `)}
`
