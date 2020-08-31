import React, { useRef, useState, useEffect } from 'react';

import {
    Container,
    SearchInput,
    ViewUp
} from './styles';

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
        </Container>
    )
}

export default HomePage 