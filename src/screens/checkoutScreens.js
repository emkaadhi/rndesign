import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import * as Icon from "react-native-feather";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full">
      <StatusBar style="dark" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="mx-5" style={{ marginTop: 50 }}>
          <View className="flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-black p-2 rounded-full"
            >
              <Icon.ArrowLeft strokeWidth={3} stroke={`white`} />
            </TouchableOpacity>
          </View>
          <View className="my-5">
            <Text className="text-2xl font-bold">Delivery Address</Text>
          </View>
          <View className="">
            <View className="flex-row items-start space-x-3">
              <Text className="w-1/3 text-lg font-bold">Alamat</Text>
              <Text className="text-md text-gray-600 font-bold">
                : 24 Jump Street
              </Text>
            </View>
          </View>
          <View className="">
            <View className="flex-row items-start space-x-3">
              <Text className="w-1/3 text-lg font-bold">Kota</Text>
              <Text className="text-md text-gray-600 font-bold">
                : 24 Jump Street
              </Text>
            </View>
          </View>
          <View className="">
            <View className="flex-row items-start space-x-3">
              <Text className="w-1/3 text-lg font-bold">Propinsi</Text>
              <Text className="text-md text-gray-600 font-bold">
                : 24 Jump Street
              </Text>
            </View>
          </View>
          <View className="">
            <View className="flex-row items-center space-x-3">
              <Text className="w-1/3 text-lg font-bold">Kode Pos</Text>
              <Text className="text-md text-gray-600 font-bold">
                : 24 Jump Street
              </Text>
            </View>
          </View>
          <View className="">
            <View className="flex-row items-center space-x-3">
              <Text className="w-1/3 text-lg font-bold">Negara</Text>
              <Text className="text-md text-gray-600 font-bold">
                : 24 Jump Street
              </Text>
            </View>
          </View>
        </View>
        <View className="px-5 my-5">
          <Text className="text-2xl font-bold">Product Item</Text>
          <View
            className="bg-slate-50 p-3 rounded-2xl mt-3"
            style={styles.shadow}
          >
            <View className="flex-row items-center ">
              <Image
                source={require("../../assets/images/l4.jpg")}
                className="h-20 w-20 rounded-2xl"
              />
              <View className="flex space-y-1 ml-4 flex-1">
                <Text className="text-md font-bold">Axel Arigato</Text>
                <Text className="text-xs font-medium text-gray-500">
                  Clean 90 Triple Sneakers
                </Text>
                <Text className="text-md font-bold">$ 245.00</Text>
              </View>
              <View className="bg-slate-50 p-2" style={styles.rounded}>
                <Text className="text-center text-gray text-lg font-medium">
                  {2}
                </Text>
              </View>
            </View>
          </View>
          <View
            className="bg-slate-50 p-3 rounded-2xl mt-3"
            style={styles.shadow}
          >
            <View className="flex-row items-center ">
              <Image
                source={require("../../assets/images/l5.jpg")}
                className="h-20 w-20 rounded-2xl"
              />
              <View className="flex space-y-1 ml-4 flex-1">
                <Text className="text-md font-bold">Axel Arigato</Text>
                <Text className="text-xs font-medium text-gray-500">
                  Clean 90 Triple Sneakers
                </Text>
                <Text className="text-md font-bold">$ 245.00</Text>
              </View>
              <View className="bg-slate-50 p-2" style={styles.rounded}>
                <Text className="text-center text-gray text-lg font-medium">
                  {1}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          className="mx-5 p-3 bg-slate-50 rounded-2xl"
          style={styles.shadow}
        >
          <View className="flex-row space-x-4 items-center">
            <View className="p-3 bg-black rounded-full">
              <Icon.Archive height={`30`} width={`30`} color={`white`} />
            </View>
            <View className="flex">
              <Text className="text-lg font-bold">Add promo code</Text>
              <Text>#rika2023</Text>
            </View>
          </View>
        </View>
        <View className="pt-10 mx-5 flex-row justify-between items-center">
          <View className="flex">
            <Text className="text-md text-gray-500">Total Price</Text>
            <Text className="text-lg font-bold">$ 550.00</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')} className="p-3 rounded-full bg-black w-2/3">
            <Text className="text-2xl font-bold text-white text-center">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.75,

    elevation: 3,
  },
  rounded: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#D6C7AE",
    justifyContent: "center",
    alignItems: "center",
  },
  smallrounded: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
