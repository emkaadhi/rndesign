import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="dark" />
      <View className="items-center mt-20">
        <Image source={require("../../assets/images/logo.png")} />
      </View>
      <View className="px-10">
        <Text className="font-bold text-3xl mt-10">Signup</Text>
        <Text className="font-medium text-md text-gray-500">
          Create new Account
        </Text>
      </View>
      <View className="px-10 mt-10">
        <Text className="font-bold text-2xl">Username</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: "lightgray",
            marginTop: 10,
          }}
        />
      </View>
      <View className="px-10 mt-5">
        <Text className="font-bold text-2xl">Email</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: "lightgray",
            marginTop: 10,
          }}
        />
      </View>
      <View className="px-10 mt-5">
        <Text className="font-bold text-2xl">Password</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: "lightgray",
            marginTop: 10,
          }}
        />
      </View>
      <View className="px-10 mt-5">
        <Text className="font-bold text-2xl">Confirmed Password</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: "lightgray",
            marginTop: 10,
          }}
        />
      </View>
      <View className="flex-row items-start px-10 mt-10 space-x-3">
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#164863" : undefined}
        />
        <Text>
          By createing an account you have agreed with our term and condition
        </Text>
      </View>
      <View className="px-5 mt-10">
        <TouchableOpacity onPress={()=>navigation.navigate('Success')} className="bg-black p-4 rounded-full">
          <Text className="text-center text-white text-2xl tracking-widest">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
