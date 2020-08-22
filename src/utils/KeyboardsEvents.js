import { Animated } from 'react-native';

export const KeyBoardEventType1 = (initialValue, endValue) => {
    return (event) => {
            Animated.timing(initialValue, {
            duration: event.duration,
            toValue: endValue,
            useNativeDriver: false
        }).start();
    }
}

