import styled from 'styled-components/native';
import GetDimensions from '../../utils/GetDimensions';

const heightPercentage = GetDimensions('height', 20)
const widhtPercentage =  GetDimensions('width', 20)

export const Container = styled.TouchableOpacity`
    padding: 5px;
    border: 1px solid black;
    justify-content: space-between;
    align-items: center;
    height: ${heightPercentage}
    width: ${widhtPercentage}
`
export const TitleFont = styled.Text`
    font-family: raleway-bold;
    font-size: 20px;
`
export const PriceFont = styled.Text`
    font-family: raleway;
`

export const ProductImage = styled.Image`
    height: 100px;
    width: 100px;
    border-color: black;
    border-width: 1px;
    border-radius: 5px;
`

export const TextView = styled.View``

