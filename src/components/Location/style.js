import styled, { css } from "styled-components"
import { desktop } from "../../styles/medias"

export const Container = styled.div`
  display: grid;
  grid-gap: 50px;

  ${desktop(css`
    grid-template-columns: 1fr 1fr;
  `)}
`

export const Side = styled.div`
  position: relative;

  &:first-child {
    min-height: 324px;
  }
`

export const Name = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 22px;
`

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`
