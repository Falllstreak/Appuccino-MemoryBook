import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraView from './screens/CameraView';

console.log('CameraView is:', CameraView);

const Stack = createNativeStackNavigator();

console.log('App is using CameraView:', typeof CameraView);

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="CameraView">
            <Stack.Screen name="CameraView" component={CameraView} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
