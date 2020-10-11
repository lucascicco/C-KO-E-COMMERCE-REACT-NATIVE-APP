import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonTouch, Text } from './styles';

export default function Button({ children, loading, enable, onPress }) {
  const [width] = useState(new Animated.Value(300));
  const [borderSize] = useState(new Animated.Value(4));

  const backgroundColor = enable ? '#283593' : '#43a047';

  const AnimationsToWork = () => {
    Animated.timing(width, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(borderSize, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (!enable) {
      AnimationsToWork();
    }
  }, [enable]);

  return (
    <Animated.View
      style={[
        styles.viewButton,
        {
          backgroundColor,
          borderRadius: borderSize,
          width,
        },
      ]}
    >
      <ButtonTouch disabled={!enable} onPress={onPress}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <>
            {enable ? (
              <Text>{children}</Text>
            ) : (
              <MaterialIcons name="done" size={24} color="white" />
            )}
          </>
        )}
      </ButtonTouch>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    borderRadius: 4,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
});

Button.propTypes = {
  enable: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
