import React from 'react';
import { Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Container, ChooseText } from './styles';

function ProductImage({onPress, uri }){
    return(
        <TouchableHighlight onPress={onPress}>
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
        height: 170,
        borderRadius: 5
    }
})

export default ProductImage