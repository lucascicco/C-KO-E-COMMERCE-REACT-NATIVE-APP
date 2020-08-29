import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
  })`
    flex: 1;
    align-items: center;
    padding: 30px 30px;
`;

export const BoxAddresses = styled.View`
    height: 200px;
    width: 100%;
    border: 1px solid black;
    flex-direction: row;
    padding: 5px;
`

export const BoxAddress =  styled.View`
    flex:1;
    border: 1px solid black;
    padding: 5px;
    margin: 2px;
`
export const ButtonView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 2px;
`
export const ButtonText = styled.Text`
    font-size: 20px;
    font-family: playfair;
`

export const AddressText = styled.Text`
    font-size: 16px;
    font-family: playfair-bold;
    margin-bottom: 5px;
`
export const BasicText = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 15px;
    font-family: raleway;
    margin: 2px;
`

export const TouchableButton = styled.TouchableOpacity`
    flex:1;
`
export const TouchableButton2 = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    padding: 5px;
`

export const RadioView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const AddressView = styled.View`
    flex-direction: flex-column
`