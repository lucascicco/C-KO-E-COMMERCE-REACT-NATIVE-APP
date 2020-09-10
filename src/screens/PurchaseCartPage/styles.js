import styled from 'styled-components/native';
import Button from '../../components/ButtonType1';

export const Container = styled.View`
    flex: 1;
    padding: 7% 15px;
`;

export const TextTitle = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 27px;
    font-family: playfair-bold;
    color: #ede7f6;
    margin-bottom: 10px;
`

export const NormalText = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-family: playfair;
`

export const TotalText = styled.Text`
    font-weight: bold;
    font-size: 22px;
    font-family: raleway-bold;
`

export const TotalBasic = styled.Text`
    font-size: 22px;
    font-style: italic;
    font-family: raleway;
`

export const ProductImage = styled.Image`
    height: 100px;
    width: 100px;
    border-color: black;
    border-width: 1px;
    border-radius: 5px;
`

export const SliptView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-color: black;
    border-bottom-width: 1px;
    border-style: solid;
    padding: 10px;
`

export const FeaturesView = styled.View`
    flex-direction: column;
    width: 67%;
`
export const PaymentTypeView = styled.View`
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
`

export const SubmitButton = styled(Button)`
    margin-top: 20px;
`;

export const RadioView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
    border: 1px solid #FFF;
    border-radius: 15px;
    align-items: center;
    margin-top: 10px;
`

export const RadioTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`

export const RadioText = styled.Text`
    font-size: 20px;
    margin-right: 10px;
    color: #FFF;
    font-family: raleway;
`

export const BasicView = styled.View`

`

export const ScrollPurchase = styled.ScrollView``

export const SmallText = styled.Text.attrs({
    numberOfLines: 1
})`
    font-style: italic;
    font-size: 14px;
    width: 150px;
    color: #FFF;
`

export const AddressView = styled.View`
    flex-direction: column;
`

export const ChangeButton = styled.View`
    padding: 10px;
    border: 1px solid #FFF;
    border-radius: 5px;
    align-items: center;
`

export const ButtonText = styled.Text`
    font-size: 25px;
    color: #FFF;
    font-family: ostrich;
`

export const TextDetails = styled.Text`
    font-size: 20px;
    font-family: raleway;
    color: white;
`

export const TextIndent = styled.View`
    flex-direction: row;
`