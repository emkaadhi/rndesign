import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function ProductScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="relative">
        <Image
          source={require("../../assets/images/l7.jpg")}
          className="w-full"
          style={{ height: 425 }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-10 left-4 bg-gray-50 p-2 rounded-full"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={`black`} />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="bg-white -mt-20 pt-6"
      >
        <View className="px-5">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-2xl font-bold">Roller Rabbit</Text>
              <Text className="text-sm">Vado Odelle dress</Text>
            </View>
            <View className="bg-slate-100 p-2 rounded-3xl">
              <View className="flex-row items-center space-x-1">
                <TouchableOpacity>
                  <Icon.MinusCircle color="black" width={20} height={20} />
                </TouchableOpacity>
                <TextInput className="text-center">{2}</TextInput>
                <TouchableOpacity>
                  <Icon.PlusCircle color="black" width={20} height={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Image
                source={require("../../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Image
                source={require("../../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Image
                source={require("../../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Image
                source={require("../../assets/images/fullStar.png")}
                className="h-4 w-4"
              />

              <Text className="text-gray-700 text-xs w-40"> (4.6k review)</Text>
              <Text className="text-gray-800 text-xs font-bold">
                {" "}
                Available in Stock
              </Text>
            </View>
          </View>
          <View className="pt-3">
            <Text className="text-2xl font-bold">Size</Text>
            <View className="flex-row justify-between items-center mt-4">
              <View className="flex items-center space-y-3">
                <View className="flex-row items-center space-x-4">
                  <View style={styles.rounded}>
                    <Text className="text-center text-gray-500 text-lg font-bold">
                      S
                    </Text>
                  </View>
                  <View style={styles.rounded}>
                    <Text className="text-center text-gray-500 text-lg font-bold">
                      M
                    </Text>
                  </View>
                  <View style={styles.rounded}>
                    <Text className="text-center text-gray-500 text-lg font-bold">
                      L
                    </Text>
                  </View>
                  <View style={styles.rounded}>
                    <Text className=" text-gray-500 text-lg font-bold">XL</Text>
                  </View>
                  <View style={styles.rounded}>
                    <Text className="text-center text-gray-500 text-lg font-bold">
                      XXL
                    </Text>
                  </View>
                </View>
              </View>
              <View className="bg-slate-100 rounded-2xl p-3">
                <View className="flex items-center space-y-2">
                  <View style={styles.smallrounded} className="bg-slate-100">
                    <View>
                      <Icon.Check color="black" width={20} height={20} />
                    </View>
                  </View>
                  <View
                    style={styles.smallrounded}
                    className="bg-amber-400"
                  ></View>
                  <View
                    style={styles.smallrounded}
                    className="bg-blue-400"
                  ></View>
                  <View
                    style={styles.smallrounded}
                    className="bg-green-400"
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="px-5">
          <Text className="text-2xl font-bold tracking-wider">Description</Text>
          <Text className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ornare porttitor consequat. Cras semper ex sed mi semper
            consectetur.
          </Text>
          <View className="flex-row justify-between items-center mt-3 mb-4">
            <View className="flex">
              <Text className="text-sm text-gray-400 font-medium">Total Price</Text>
              <Text className="text-xl font-bold">$ 198.00</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')} className="bg-gray-700 px-6 py-3 rounded-3xl">
              <View className="flex-row items-center space-x-3">
                <Icon.ShoppingBag strokeWidth={3} stroke={`white`} />
                <Text className="text-xl font-bold text-white tracking-wider">
                  Add to cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
