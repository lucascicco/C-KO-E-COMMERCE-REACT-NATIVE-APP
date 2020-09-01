import styled from 'styled-components/native';

import Button from '../../components/ButtonType1';
import Input from '../../components/TextInput';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
`;

export const ProductView = styled.View`
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 15px;
`

export const ProductTitle = styled.Text`
    font-size: 35px;
    color: #FFF;
    margin-bottom: 10px;
    text-align: center;
    font-family: playfair-bold;
`

export const DetailsText = styled.Text`
    font-size: 17px;
    color: #FFF;
`

export const DetailsTitle = styled.Text`
    font-size: 18px;
    margin: 3px;
    font-family: raleway-bold;
`

export const PriceText =  styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #FFF;
`

export const ProductImage = styled.Image`
    height: 150px;
    width: 150px;
    border-color: black;
    border-width: 1px;
    border-radius: 5px;
`

export const Details = styled.View`
    align-items: center;
`


export const FeaturesView = styled.View`
    flex-direction: column;
    width: 50%;
`
export const RowView = styled.View`
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`

export const SubmitButton = styled(Button)`
    margin-top: 10px;
`;

export const CalculateButton = styled(Button)`

`

export const QuantityInput = styled(Input)`
  margin-bottom: 10px;
`;


export const TotalText = styled.Text`
    font-weight: bold;
    font-size: 22px;
`

export const TotalBasic = styled.Text`
    font-size: 22px;
    font-style: italic;
`

export const DescriptionView = styled.View`
    height: 30%;
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    background: #eceff1;
`

export const DescriptionScroll = styled.ScrollView`
    margin-top: 5px;
`

export const DescriptionText = styled.Text`
    font-size: 15px;
`