import { Dimensions } from 'react-native';

export const vw = number => {
  return (Dimensions.get('window').width / 100) * number;
};

export const vh = number => {
  return (Dimensions.get('window').height / 100) * number;
};
