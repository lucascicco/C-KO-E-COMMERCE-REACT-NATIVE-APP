import styled from 'styled-components/native';
import Button from '../../components/ButtonType1';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 15px;
`;

export const TextTitle = styled.Text`
    font-weight: bold;
    font-size: 25px;
`

export const NormalText = styled.Text`
    font-size: 20px;
`

export const TotalText = styled.Text`
    font-weight: bold;
    font-size: 22px;
`

export const TotalBasic = styled.Text`
    font-size: 22px;
    font-style: italic;
`

export const ProductImage = styled.Image`
    height: 100px;
    width: 100px;
    border: 1px solid black;
    border-radius: 5px;
`

export const SliptView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-color: #546e7a;
    border-bottom-width: 1px;
    border-style: solid;
    padding: 10px;
`

export const FeaturesView = styled.View`
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
`
export const PaymentTypeView = styled.View`
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    padding: 10px;
`

export const SubmitButton = styled(Button)`
    margin-top: 20px;
`;

export const RadioView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
    border: 1px solid #283593;
    border-radius: 15px;
    align-items: center;
`

export const RadioTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
`

export const RadioText = styled.Text`
    font-size: 20px;
    margin-right: 10px;
`

export const BasicView = styled.View``


