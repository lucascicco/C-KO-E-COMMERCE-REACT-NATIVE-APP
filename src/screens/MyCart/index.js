import React from 'react';
import FlatlistProducts from '../../components/MyProfilePagesComponents/MyCartFlatList';
import data from '../../utils/testing_data';
import { AntDesign } from '@expo/vector-icons'; 

import { 
    Container,
    Total_View,
    Total_Price,
    Continue_Text,
    Continue_Button
} from './styles';


export default function MyCart(){
    return(
        <Container>
            <FlatlistProducts 
                data={data}
            />

            <Total_View>
                <Total_Price>R$ 8.000,00 </Total_Price>

                <Continue_Button>
                    <Continue_Text>Comprar</Continue_Text>
                    <AntDesign name="arrowright" size={30} color="black" />
                </Continue_Button>
            </Total_View>
        </Container>
    )
}

MyCart.navigationOptions = ({ navigation }) => ({
    title: 'Meu carrinho',
    headerBackTitle: 'Voltar'
});