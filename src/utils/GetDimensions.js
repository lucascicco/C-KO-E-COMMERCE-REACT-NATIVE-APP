import { Dimensions } from 'react-native';

export default (value, percentage) => {
  const { width, height } = Dimensions.get('window');

  const heightPx = `${((height * percentage) / 100).toString()}px`;
  const widthPx = `${((width * percentage) / 100).toString()}px`;

  return value === 'height' ? heightPx : widthPx;
};
