import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Side = styled.div`
  display: grid;
  grid-gap: 28px;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
