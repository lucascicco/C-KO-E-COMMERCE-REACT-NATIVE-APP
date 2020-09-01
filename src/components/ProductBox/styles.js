import styled from 'styled-components/native';
import GetDimensions from '../../utils/GetDimensions';

const heightPercentage = GetDimensions('height', 30)
const widthPercentage =  GetDimensions('width', 20)

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
export const TitleFont = styled.Text`
    font-family: raleway-bold;
    font-size: 15px;
    text-align: center;
`
export const PriceFont = styled.Text`
    font-size: 15px;
    font-weight: bold;
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
    height: 30%;
`

export const PriceView = styled.View`

`

