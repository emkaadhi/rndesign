import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import WelcomeScreen from "../screens/welcomeScreen";
import SplashScreen from "../screens/splashScreen";
import CategoryScreen from "../screens/categoryScreen";
import ProductScreen from "../screens/productScreen";
import { useFonts } from "expo-font";
import LoginScreen from "../screens/loginScreen";
import SignupScreen from "../screens/signupScreen";
import SuccessScreen from "../screens/successScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [fontsLoaded] = useFonts({
    OSBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
    OSMedium: require("../../assets/fonts/OpenSans-Medium.ttf"),
    OSRegular: require("../../assets/fonts/OpenSans-Regular.ttf"),
    OSLight: require("../../assets/fonts/OpenSans-Light.ttf"),
    OSSemiBold: require("../../assets/fonts/OpenSans-SemiBold.ttf"),
    OSExtraBold: require("../../assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Success"
          component={SuccessScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Category"
          component={CategoryScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Product"
          component={ProductScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Cart"
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
