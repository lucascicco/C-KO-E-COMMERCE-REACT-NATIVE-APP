import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
`;

export const TextTitle = styled.Text`
  font-size: 25px;
  color: #fff;
`;
export const CustomView = styled.View`
  background: #303f9f;
  border-radius: 60px;
  height: 50px;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoadingView = styled.View`
  height: 50px;
  width: 100px;
`;

export const WarningText = styled.Text`
  font-size: 65px;
  color: black;
  font-weight: bold;
`;
