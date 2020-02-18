import styled, { css } from "styled-components"
import background from "../../images/Main background.png"
import { COLORS } from "../../utils/constants"
import { Wrapper } from "../../styles/wrapper"
import { desktop } from "../../styles/medias"

export const Container = styled.section`
  background-image: url('${background}');
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  ${desktop(css`
    min-height: calc(100vh - 180px);
  `)}
`

export const Content = styled(Wrapper)`
  max-width: 621px;
  text-align: center;
`

export const Title = styled.h1`
  position: absolute;
  left: -9999pc;
`

export const Description = styled.p`
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  margin-top: 30px;
`

export const Button = styled.button`
  height: 65px;
  padding: 0 50px;
  background-color: transparent;
  color: ${COLORS.brand};
  border: 1px solid;
  border-radius: 10px;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  margin-top: 30px;
`
