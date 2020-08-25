import React from 'react';
import { Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Container, ChooseText } from './styles';

function ProductImage({ uri }){
    return(
        <TouchableHighlight onPress={() => console.log('ProductImage was pressed')}>
            <Container>
            {uri ?  (
                <Image 
                   style={styles.imageConf}
                   source={{
                       uri: uri,
                   }}
               />
            ) : (
                <ChooseText>
                    Escolha a imagem
                </ChooseText>
            )}
            </Container>
        </TouchableHighlight>
       
    )
}

const styles = StyleSheet.create({
    imageConf: {
        borderWidth: 5, 
        borderColor: 'red'
    }
})

export default ProductImage