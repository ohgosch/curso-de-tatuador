import styled from 'styled-components';

import { COLORS } from '../../utils/constants';
import { Input } from '../../styles/input';

export const Container = styled.div`
  display: grid;
  grid-gap: 5px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 130px;
  grid-gap: 25px;
`;

export const Send = styled(Input)`
  background-color: ${COLORS.dark};
`;
