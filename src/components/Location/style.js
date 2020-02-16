import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`

export const Side = styled.div`
  position: relative;
  min-height: 324px;
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
