import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#673ab7', '#7e57c2'],
  useAngle: true,
  angle: 120,
  angleCenter: { x: 0.5, y: 0.5 },
})`
  flex: 1;
`;
