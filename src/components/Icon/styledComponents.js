import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const IconContainer = styled.View`
  height: 55px;
  width: 55px;
  background-color: #f0f1f1;
  align-items: center;
  justify-content: center;
  border-radius: 100;
`;

export const ExpoIcon = styled(AntDesign)`
  font-size: 24;
`;
