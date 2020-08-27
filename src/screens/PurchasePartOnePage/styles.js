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
    font-size: 18px;
`

export const TotalText = styled.Text`
    font-weight: bold;
    font-size: 20px;
`

export const ProductImage = styled.Image`
    height: 100px;
    width: 100px;
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
    border: 1px solid red;
    height: 100px;
`

export const SubmitButton = styled(Button)`
    margin-top: 20px;
`;