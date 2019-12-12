import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: center;
  width: 100%;
  background-color: #7fecfa;
`;

export const AnimationView = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
  height: 300px;
`;

export const DescriptionView = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const IntroTitle = styled.Text`
  font-size: 24px;
  text-align: center;
  padding: 16px;
  line-height: 30;
  color: #393c50;
`;

export const IntroText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding-top: 32px;
  line-height: 26;
  color: #636363;
`;
