import { Animated } from 'react-native';

export const ImageResizingEventOne = (initialValue, endValue) => {
    return (event) => {
            Animated.timing(initialValue, {
            duration: event.duration,
            toValue: endValue,
            useNativeDriver: false
        }).start();
    }
}

export const ImageResizingEventTwo = (type, IconSize, ViewSize, TextSize) => {
   if(type === 'show'){
        return (event) => {
            Animated.timing(IconSize, {
                duration: event.duration,
                toValue: 40,
                useNativeDriver: false
              }).start();
  
            Animated.timing(ViewSize, {
                  duration: event.duration,
                  toValue: 50,
                  useNativeDriver: false
                }).start();
  
            Animated.timing(TextSize, {
                duration: event.duration,
                toValue: 30,
                useNativeDriver: false
              }).start();
        };
   }else{
        return (event) => {
            Animated.timing(IconSize, {
                duration: event.duration,
                toValue: 70,
                useNativeDriver: false
              }).start();

            Animated.timing(ViewSize, {
                  duration: event.duration,
                  toValue: 100,
                  useNativeDriver: false
                }).start();

            Animated.timing(TextSize, {
                duration: event.duration,
                toValue: 35,
                useNativeDriver: false
              }).start()
        };
   }

}


export const ImageResizingEventThree = (type, height, width, font) => {
  if(type === 'show'){
      return (event) => {
        Animated.timing(height, {
          duration: event.duration,
          toValue: 100,
          useNativeDriver: false
        }).start();
        Animated.timing(width, {
          duration: event.duration,
          toValue: 125,
          useNativeDriver: false
        }).start();
        Animated.timing(font, {
          duration: event.duration,
          toValue: 17,
          useNativeDriver: false
        }).start();
      }
  }else{
      return (event) => {
        Animated.timing(height, {
          duration: event.duration,
          toValue: 175,
          useNativeDriver: false
        }).start();
        Animated.timing(width, {
          duration: event.duration,
          toValue: 210,
          useNativeDriver: false
        }).start();
        Animated.timing(font, {
          duration: event.duration,
          toValue: 22,
          useNativeDriver: false
        }).start();
      }
  }
  
}