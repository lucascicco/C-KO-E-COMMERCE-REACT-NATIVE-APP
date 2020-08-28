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
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 10px;
    text-align: center;
`

export const DetailsText = styled.Text`
    font-size: 17px;
`

export const DetailsTitle = styled.Text`
    font-size: 17px;
    font-weight: bold;
    margin: 3px;
`

export const PriceText =  styled.Text`
    font-size: 22px;
    font-weight: bold;
`

export const ProductImage = styled.Image`
    height: 150px;
    width: 150px;
    border: 1px solid black;
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
    border: 1px solid black;
    height: 30%;
    width: 100%;
    padding: 10px;
    border-radius: 2px;
`

export const DescriptionScroll = styled.ScrollView`
    margin-top: 5px;
`

export const DescriptionText = styled.Text`
    font-size: 15px;
`