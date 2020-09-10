import styled from 'styled-components/native';
import GetDimensions from '../../utils/GetDimensions';

const heightPercentage = GetDimensions('height', 30)

export const Container = styled.TouchableOpacity`
    padding: 5px;
    justify-content: center;
    align-items: center;
    background: #FFF;
    flex: 1;
    margin: 10px 3px;
    height: ${heightPercentage};
    border-radius: 3px;
`
export const PriceFont = styled.Text`
    margin-top: 3px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`
export const TitleFont = styled.Text.attrs({
    numberOfLines: 2
})`
    font-size: 14px;
    color: #757575;
    font-family: raleway-bold;
    text-align: center;
`

export const ProductImage = styled.Image`
    height: 60%;
    width: 80%;
    border-color: black;
    border-width: 1px;
    border-radius: 5px;
`

export const TextView = styled.View`
    align-items: center;
    justify-content: center;
    height: 20%;
`

export const PriceView = styled.View``

