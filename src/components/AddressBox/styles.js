import styled from 'styled-components/native';


export const TouchableButton = styled.TouchableOpacity`
    flex:1;
`
export const RadioView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const BoxAddress =  styled.View`
    flex:1;
    border: 1px solid black;
    padding: 5px;
    margin: 2px;
`

export const BasicText = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 15px;
    font-family: raleway;
    margin: 2px;
`


export const AddressText = styled.Text`
    font-size: 16px;
    font-family: playfair-bold;
    margin-bottom: 5px;
    width: 80%;
`