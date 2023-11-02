import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
  const [fontsLoaded] = useFonts({
    OSBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
    OSMedium: require("../../assets/fonts/OpenSans-Medium.ttf"),
    OSRegular: require("../../assets/fonts/OpenSans-Regular.ttf"),
    OSLight: require("../../assets/fonts/OpenSans-Light.ttf"),
    OSSemiBold: require("../../assets/fonts/OpenSans-SemiBold.ttf"),
    OSExtraBold: require("../../assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const navigation = useNavigation();
  return (
    <View className="relative">
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../assets/images/bg2.jpg")}
        resizeMode={"cover"}
        className="h-full w-full "
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="w-full absolute"
          style={{ bottom: 200 }}
        >
          <View className="bg-white p-5 rounded-full mx-10">
            <Text className="text-center text-lg tracking-widest">Login</Text>
          </View>
        </TouchableOpacity>
        <View className="w-full absolute" style={{ bottom: 100 }}>
          <View className="border border-1 border-white p-5 rounded-full mx-10">
            <Text className="text-center text-lg text-white tracking-widest">
              Sign Up
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 3,
  },
  bold: {
    fontFamily: "OSBold",
  },
  medium: {
    fontFamily: "OSMedium",
  },
  regular: {
    fontFamily: "OSRegular",
  },
  light: {
    fontFamily: "OSLight",
  },
  semibold: {
    fontFamily: "OSSemiBold",
  },
  extrabold: {
    fontFamily: "OSExtraBold",
  },
});
