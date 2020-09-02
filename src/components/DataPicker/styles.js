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
  font-family: ${props => props.style.fontFamily};
`;

export const Picker = styled.View`
    justify-content: center;
    padding: 5%;
    background: #7986cb;
`;

export const PickerTitle = styled.Text`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    font-family: playfair-bold
`