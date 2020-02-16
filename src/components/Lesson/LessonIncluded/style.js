import styled from "styled-components"

export const Container = styled.section``

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  padding: 0 100px;
`

export const Items = styled.ul`
  list-style-type: none;
  text-align: center;
  margin-top: 35px;
`

export const Item = styled.li`
  line-height: 50px;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  &:nth-child(odd) {
    background-color: rgba(159, 86, 19, 0.5);
  }
`
