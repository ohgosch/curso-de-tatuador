import styled, { css } from "styled-components"
import { desktop } from "../../../styles/medias"

export const Container = styled.section``

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 47px;
  text-align: center;

  ${desktop(css`
    padding: 0 100px;
  `)}
`

export const Items = styled.ul`
  list-style-type: none;
  text-align: center;
  margin-top: 35px;
`

export const Item = styled.li`
  width: 100%;
  min-height: 50px;
  text-align: center;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 10px;

  &:nth-child(odd) {
    background-color: rgba(159, 86, 19, 0.5);
  }
`
