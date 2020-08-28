import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
    colors: ['#FFF', '#5c6bc0'],
    useAngle: true,
    angle: 100,
    angleCenter: { x: 0.5, y: 0.5 },
  })
  `
    flex: 1;
  `;