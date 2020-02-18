import styled, { css } from "styled-components"

import { COLORS } from "../../utils/constants"
import { Input } from "../../styles/input"
import { desktop, tablet } from "../../styles/medias"

export const Container = styled.div`
  display: grid;
  grid-gap: 5px;
`

export const Form = styled.form`
  display: grid;
  grid-gap: 25px;

  ${desktop(css`
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) 130px;
  `)}

  ${tablet(css`
    grid-template-columns: 1fr 1fr;
  `)}
`

export const Send = styled(Input)`
  background-color: ${COLORS.dark};
`
