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

export default function CartScreen() {
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
            <View className="relative">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-slate-200 p-2 rounded-full"
              >
                <Icon.ShoppingCart strokeWidth={3} stroke={`black`} />
              </TouchableOpacity>
              <View
                className="absolute bg-black p-2 -top-4 left-4"
                style={styles.smallrounded}
              >
                <Text className="text-white text-xs text-center">3</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mx-5 mt-5">
          <Text className="my-5 text-2xl font-bold">My Cart</Text>
          <View className="mb-3">
            <View
              className="bg-slate-50 p-3 rounded-3xl px-5 "
              style={styles.shadow}
            >
              <View className="flex-row space-x-2">
                <Image
                  source={require("../../assets/images/l7.jpg")}
                  className="h-24 w-24 rounded-2xl"
                />
                <View className="flex space-y-2">
                  <Text className="text-lg font-bold">Roller Rabbit</Text>
                  <Text className="text-xs">Vado Odelle dress</Text>
                  <View className="flex-row justtify-between items-center">
                    <Text style={{ marginRight:75 }}  className="text-lg font-bold">$ 198.00</Text>
                    <View className="bg-transparent p-1 rounded-3xl">
                      <View className="flex-row items-center space-x-1">
                        <TouchableOpacity>
                          <Icon.MinusCircle
                            color="black"
                            width={20}
                            height={20}
                          />
                        </TouchableOpacity>
                        <TextInput className="text-center">{2}</TextInput>
                        <TouchableOpacity>
                          <Icon.PlusCircle
                            color="black"
                            width={20}
                            height={20}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#E1ECC8",
                marginTop: 15,
              }}
            />
          </View>
          <View className="mb-3">
            <View
              className="bg-slate-50 p-3 rounded-3xl px-5 "
              style={styles.shadow}
            >
              <View className="flex-row space-x-2">
                <Image
                  source={require("../../assets/images/l7.jpg")}
                  className="h-24 w-24 rounded-2xl"
                />
                <View className="flex space-y-2">
                  <Text>Roller Rabbit</Text>
                  <Text>Vado Odelle dress</Text>
                  <View className="flex-row justtify-between items-center">
                    <Text style={{ marginRight: 100 }}>$ 198.00</Text>
                    <View className="bg-slate-100 p-1 rounded-3xl">
                      <View className="flex-row items-center space-x-1">
                        <TouchableOpacity>
                          <Icon.MinusCircle
                            color="black"
                            width={20}
                            height={20}
                          />
                        </TouchableOpacity>
                        <TextInput className="text-center">{2}</TextInput>
                        <TouchableOpacity>
                          <Icon.PlusCircle
                            color="black"
                            width={20}
                            height={20}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#E1ECC8",
                marginTop: 15,
              }}
            />
          </View>
        </View>
        <View className="mt-3 mx-5">
          <View className="p-3 rounded-2xl px-5 border border-1 border-gray-200">
            <View className="flex-row justify-between items-center my-3">
              <Text className="text-lg font-bold">Sub Total</Text>
              <Text className="text-xl text-gray-500 font-bold">$ 198.00</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#E1ECC8",
                marginTop: 15,
              }}
            />
            <View className="flex-row justify-between items-center my-3">
              <Text className="text-lg font-bold">Shipping</Text>
              <Text className="text-xl text-gray-500 font-bold">$ 20.00</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#E1ECC8",
                marginTop: 15,
              }}
            />
            <View className="flex-row justify-between items-center my-3">
              <Text className="text-lg font-bold">Total</Text>
              <Text className="text-xl text-gray-500 font-bold">$ 218.00</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#E1ECC8",
                marginTop: 15,
              }}
            />
          </View>
        </View>
        <View className="mt-5 px-5">
          <View className="p-3 rounded-full bg-black py-5">
            <Text className="text-white text-center tracking-wider text-lg font-bold">Process to Checkout</Text>
          </View>
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
  smallrounded: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
