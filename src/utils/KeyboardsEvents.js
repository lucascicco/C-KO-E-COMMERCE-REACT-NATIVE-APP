import { Animated } from 'react-native';

export const KeyBoardEventType1 = (event, initialValue, endValue) => {
    console.log(event.duration, initialValue, endValue);
    Animated.timing(initialValue, {
        duration: 1000,
        toValue: endValue,
        useNativeDriver: false
      }).start();
}

