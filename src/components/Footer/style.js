import styled, { css } from "styled-components";

import { COLORS } from '../../utils/constants';
import { Wrapper as WrapperBase } from '../../styles/wrapper';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';

export const Container = styled.footer`
  background-color: ${COLORS.brand};
`;

export const Wrapper = styled(WrapperBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const Side = styled.div`
  display: flex;
  align-items: center;
`;

export const Copyright = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
`;

export const SocialMedia = styled.a`
  display: table;
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  background-color: ${COLORS.background};
  font-size: 0;
  margin-left: 25px;
  background-size: 20px;
  
  ${props => props.media === 'facebook' && css`
    background-image: url('${facebook}')
  `}

  ${props => props.media === 'instagram' && css`
    background-image: url('${instagram}')
  `}
`;
