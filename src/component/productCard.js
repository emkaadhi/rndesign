import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Icon from "react-native-feather";

export default function ProductCard() {

    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Product')}>
      <Image
        source={require("../../assets/images/l4.jpg")}
        style={{ height: 250, width: 180, position: "relative" }}
        className="rounded-3xl"
      />
      <Icon.Heart
        width={`20`}
        height={`20`}
        color={`red`}
        className="absolute top-4 right-4"
      />
      <View className="items-center">
        <Text className="font-bold text-sm text-gray-800">Gia Borghini</Text>
        <Text className="text-sm text-gray-800">RHW Rossie 1 Sandals</Text>
        <Text className="font-bold text-sm text-gray-800">$ 340</Text>
      </View>
    </TouchableOpacity>
  );
}
