import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeIn, FadeInUp, FadeOut } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function SuccessScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3500);
  }, []);

  return (
    <View className="h-full w-full bg-white justify-center items-center">
      <StatusBar style="dark" />
      <Animated.Image
        entering={FadeInUp.delay(200).duration(600).springify().damping(2)}
        source={require("../../assets/images/success.png")}
        style={{ height: 295, width: 215 }}
        className="items-center"
      />
      <View className="mt-10 items-center">
        <Icon.CheckCircle width={`50`} height={`50`} stroke={`green`} />
        <Text className="text-black font-bold text-3xl mt-5">
          Successfull !
        </Text>
        <View className="mx-10">
          <Text className="text-black font-md text-md mt-3 text-center">
            You have Successfull registered in our app and start working on it
          </Text>
        </View>
      </View>
    </View>
  );
}
