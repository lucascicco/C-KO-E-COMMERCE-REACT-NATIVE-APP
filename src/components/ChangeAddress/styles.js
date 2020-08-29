import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
  })`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
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
    font-size: 20px;
    font-family: playfair-bold;
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

