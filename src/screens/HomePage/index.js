import React, { useRef, useState, useEffect } from 'react';
import ProductList from '../../components/ItemsBox';

import {
    Container,
    SearchInput,
    ViewUp,
    ViewDown
} from './styles';

const data = [
    {
        productName: 'Alisador de cabelo',
        price: 2.500
    },
    {
        productName: 'Celular apple',
        price: 2.500
    },
    {
        productName: 'Vassoura',
        price: 2.500
    },
    {
        productName: 'Cambio do motor hibrido 2031 SSSSSSSSSSS',
        price: 2.500
    },
    {
        productName: 'Controle remoto',
        price: 2500
    },
    {
        productName: 'Caneta BIC',
        price: 2.500
    },
    {
        productName: 'Alisador de cabelo',
        price: 2.500
    },
]

function HomePage(){
    const [search, setSearch] = useState('')

    return(
        <Container>
            <ViewUp>
                <SearchInput
                    icon="search"
                    placeholder="Buscar"
                    autoCorrect={true}
                    maxLength={30}
                    autoCapitalize="none"
                    returnKeyType="send"
                    onChangeText={setSearch}
                    value={search}
                    style={{ 
                        borderRadius: 0,
                        backgroundColor: '#b0bec5'
                    }}
                    textStyle={{
                        color: 'black'
                    }}
                    onSubmitEditing={() => console.log('Sended')}
                />
            </ViewUp>

            <ProductList 
                data={data}
            />

        </Container>
    )
}

export default HomePage 