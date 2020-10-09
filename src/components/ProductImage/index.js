import React from 'react';
import { Animated, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function ProductImage({ onPress, uri }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Animated.View style={[styles.Container]}>
        {uri ? (
          <Animated.Image
            style={{ flex: 1 }} // Flex 1 resize the image size according to the view.
            source={{
              uri,
            }}
            resizeMode="contain"
          />
        ) : (
          <Animated.Text style={[styles.ChooseText]}>
            Escolha uma imagem
          </Animated.Text>
        )}
      </Animated.View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    backgroundColor: '#546e7a',
    borderColor: 'black',
    borderWidth: 2,
    height: 200,
    width: 200,
  },
  ChooseText: {
    color: '#FFF',
    margin: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'raleway',
    fontSize: 25,
  },
});

ProductImage.propTypes = {
  uri: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
