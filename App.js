import { StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/core/firebaseConfig';

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from './src/screens/index';
import AdminLoginScreen from './src/screens/AdminLogin';
import AdminDashboardScreen from './src/screens/AdminDashboard';
import Homepage from './src/screens/Homepage';

initializeApp(firebaseConfig);

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
          <Stack.Screen
            name="AdminDashboardScreen"
            component={AdminDashboardScreen}
          />
          <Stack.Screen name="HomepageScreen" component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: '20',
  },
});
