import styled, { css } from "styled-components"
import { mobile, tabletDesktop } from "../../styles/medias"

export const Container = styled.div`
  display: flex;
  align-items: center;

  ${mobile(css`
    flex-wrap: wrap;
    justify-content: center;
  `)}
`

export const ProfilePhoto = styled.img`
  ${mobile(css`
    margin-bottom: 30px;
  `)}
`

export const ContentSide = styled.div`
  ${tabletDesktop(css`
    margin-left: 40px;
  `)}
`

export const Name = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 10px;
`

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
`
