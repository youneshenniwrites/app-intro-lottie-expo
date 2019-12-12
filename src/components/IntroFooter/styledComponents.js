import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

export const Tracker = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 80;
`;

export const Circle = styled.View`
  height: 10px;
  width: 10px;
  background-color: ${props => (props.color ? '#fff' : '#a9c3c7')};
  align-items: center;
  justify-content: center;
  border-radius: 100;
`;
