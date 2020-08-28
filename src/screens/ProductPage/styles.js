import styled from 'styled-components/native';
import Button from '../../components/ButtonType1';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const ProductView = styled.View`
    width: 90%
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
    font-size: 20px;
    text-align: center;
`

export const PriceText =  styled.Text`
    font-size: 25px;
    font-weight: bold;
`

export const ProductImage = styled.Image`
    height: 170px;
    width: 170px;
    border: 1px solid black;
    border-radius: 5px;
`

export const Details = styled.View`
    border: 1px solid black;
`

export const FeaturesView = styled.View`
    flex-direction: column;
    width: 45%;
    border: 1px solid black;
`
export const RowView = styled.View`
    flex-direction:row;
    justify-content: space-between;
`

export const SubmitButton = styled(Button)`
    margin-top: 20px;
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
    width: 90%;
`

export const DescriptionScroll = styled.ScrollView``

export const DescriptionText = styled.Text`
    font-size: 16px;
`