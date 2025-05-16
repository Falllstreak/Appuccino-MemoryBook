import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraView from './screens/CameraView';
import LoginScreen from './screens/LoginScreen';

console.log('CameraView is:', CameraView);

const Stack = createNativeStackNavigator();

console.log('App is using CameraView:', typeof CameraView);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CameraView" component={CameraView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
