import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {
    const navigation = useNavigation()
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="dark" />
      <View className="items-center mt-20">
        <Image source={require("../../assets/images/logo.png")} />
      </View>
      <View className="px-10">
        <Text className="font-bold text-3xl mt-20">Welcome</Text>
        <Text className="font-medium text-md text-gray-500">
          Please Login or Sign Up to continue our app
        </Text>
      </View>
      <View className="px-10 mt-10">
        <Text className="font-bold text-2xl">Email</Text>
        <TextInput
          style={{ borderBottomWidth: 1, borderColor: "lightgray", marginTop: 10 }}
        />
      </View>
      <View className="px-10 mt-5">
        <Text className="font-bold text-2xl">Password</Text>
        <TextInput
          style={{ borderBottomWidth: 1, borderColor: "lightgray", marginTop: 10 }}
        />
      </View>
      <View className="px-5 mt-10">
        <TouchableOpacity className="bg-black p-4 rounded-full">
          <Text className="text-center text-white text-2xl tracking-widest">
            Login
          </Text>
        </TouchableOpacity>
        <Text className="my-3 text-center">or</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')} className="bg-blue-600 p-4 rounded-full">
          <View className="flex-row items-center justify-center space-x-3">
            <Icon.Facebook width={`25`} height={`25`} stroke={`white`} />
            <Text className="text-center text-white text-lg tracking-widest">
              continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <View className="mt-3">
          <TouchableOpacity className="border border-1 border-black p-4 rounded-full">
            <View className="flex-row items-center justify-center space-x-3">
            <Image source={require("../../assets/images/google.png")} style={{width:25,height:25}}/>
              <Text className="text-center text-black text-lg tracking-widest">
                continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-3">
          <TouchableOpacity className="border border-1 border-black p-4 rounded-full">
            <View className="flex-row items-center justify-center space-x-3">
              <Image source={require("../../assets/images/apple.png")} style={{width:25,height:25}}/>
              <Text className="text-center text-black text-lg tracking-widest">
                continue with Apple
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}
