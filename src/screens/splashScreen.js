import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";

export default function SplashScreen() {
    const x = useNavigation()
  return (
    <View className="flex-1 bg-white">
      <View className="mx-10 pt-20">
        <View className="">
          <Image
            source={require("../../assets/images/l6.jpg")}
            className="w-full"
            style={{
              height: 475,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 130,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}
          />
        </View>
        <View className="mt-10">
          <Text className="text-gray-950 text-3xl font-bold tracking-widest">20% Discount</Text>
          <Text className="text-gray-950 text-3xl font-bold tracking-widest mt-2">New Arrival Product</Text>
        </View>
        <View className="mt-10">
          <Text className="text-gray-600">
            met lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
            labore at justo ipsum eirmod duo labore labore.
          </Text>
        </View>
        <View className="flex-row justify-between items-center mt-10">
            <Icon.MinusCircle height="30" width="30" stroke="black" strokeWidth={2} />
            <TouchableOpacity onPress={()=>x.navigate('Home')}>

            <Icon.ArrowRightCircle height="30" width="30" stroke="black" strokeWidth={2} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
