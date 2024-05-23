
import { NavigationContainer } from '@react-navigation/native';
import { LogScreen } from './screens/LogScreen';
import { StackNavigator } from './routes/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}


