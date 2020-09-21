import React, { useState, useEffect } from 'react';
import FlatlistProducts from '../../components/MyProfilePagesComponents/MyProductsList';
import data from '../../utils/testing_data';
import api from '../../services/api';
import { withNavigationFocus } from 'react-navigation';

import { 
    Container,
    ViewEmpty,
    TextNoProducts
} from './styles';


function MyProducts({ isFocused }){
    const [MyProducts, SetMyProducts] = useState([])

    const loadMyProducts = async () => {
        const response = await api.get('myProducts')

        SetMyProducts(response.data)
    }

    useEffect(()  => {
        if(isFocused){
            loadMyProducts()
        }
    }, [isFocused])

    return(
        <Container>
            {
                MyProducts.length === 0 ? (
                    <ViewEmpty>
                        <TextNoProducts>
                            Você ainda não possui produtos à venda.
                        </TextNoProducts>
                    </ViewEmpty>
                ) : (
                    <FlatlistProducts 
                         data={MyProducts}
                    />
                )
            }
        </Container>
    )
}

MyProducts.navigationOptions = ({ navigation }) => ({
    title: 'Meus produtos',
    headerBackTitle: 'Voltar'
});

export default withNavigationFocus(MyProducts)