import styled from 'styled-components/native';

export const Container = styled.View`
  margin-right: 10px;
  width: 57%;
`;

export const DateButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  height: 46px;
  border-radius: 4px;
  background: #546e7a;
`;

export const DateText = styled.Text`
  margin-left: 15px;
  font-size: 18px;
  color: #fff;
`;

export const Picker = styled.View`
    flex: 1;
    justify-content: center;
    padding: 5%;
    border: 5px solid red;
`;

export const PickerTitle = styled.Text`
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
`