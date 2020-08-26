import React from 'react';
import { Animated, TouchableHighlight, StyleSheet } from 'react-native';

function ProductImage({onPress, uri, Height, Width, FontSize }){
    console.log(Height)
    return(
        <TouchableHighlight onPress={onPress}>
            <Animated.View style={[styles.Container, { height: Height, width: Width }]}> 
            {uri ? (
                <Animated.Image
                   style={{ height: Height}}
                   source={{
                       uri: uri,
                   }}
               />
            ) : (
                <Animated.Text
                    style={[styles.ChooseText, { fontSize: FontSize }]}
                >
                    Escolha uma imagem
                </Animated.Text>
            )}
            </Animated.View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        backgroundColor: '#546e7a',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    },
    ChooseText: {
        color: '#039be5',
        margin: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default ProductImage