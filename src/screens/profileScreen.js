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

export default function ProfileScreen() {
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
        </View>
        <View className="px-5 my-5">
          <View
            className="bg-slate-50 p-3 rounded-2xl mt-3"
            style={styles.shadow}
          >
            <View className="flex-row items-center">
              <Image
                source={require("../../assets/images/user-2.png")}
                className="h-20 w-20 rounded-2xl"
              />
              <View className="flex space-y-1 ml-4 flex-1">
                <Text className="text-lg font-bold">Kurnia Adhi</Text>
                <Text className="text-md font-bold text-gray-600">
                  kurniaadhi@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View className="p-5  border border-gray-200 rounded-xl bg-transparent mt-5">
            <View className="my-3 flex-row items-center space-x-4">
              <Icon.User strokeWidth={3} stroke={`black`} />
              <Text className="w-3/4 text-lg font-bold">Personal Detail</Text>
              <Icon.ChevronRight strokeWidth={3} stroke={`black`} />
            </View>
            <View className="my-3 flex-row items-center space-x-4">
              <Icon.ShoppingBag strokeWidth={3} stroke={`black`} />
              <Text className="w-3/4 text-lg font-bold">My Order</Text>
              <Icon.ChevronRight strokeWidth={3} stroke={`black`} />
            </View>
            <View className="my-3 flex-row items-center space-x-4">
              <Icon.Heart strokeWidth={3} stroke={`black`} />
              <Text className="w-3/4 text-lg font-bold">My Favorites</Text>
              <Icon.ChevronRight strokeWidth={3} stroke={`black`} />
            </View>
            <View className="my-3 flex-row items-center space-x-4">
              <Icon.Truck strokeWidth={3} stroke={`black`} />
              <Text className="w-3/4 text-lg font-bold">Shopping Address</Text>
              <Icon.ChevronRight strokeWidth={3} stroke={`black`} />
            </View>
            <View className="my-3 flex-row items-center space-x-4">
              <Icon.Settings strokeWidth={3} stroke={`black`} />
              <Text className="w-3/4 text-lg font-bold">Setting</Text>
              <Icon.ChevronRight strokeWidth={3} stroke={`black`} />
            </View>
          </View>
          <View className="p-5  border border-gray-200 rounded-xl bg-transparent mt-5">
            <View className="my-3 flex-row items-center space-x-4">
              <Icon.AlertCircle strokeWidth={3} stroke={`black`} />
              <Text className="w-3/4 text-lg font-bold">FAQ's</Text>
              <Icon.ChevronRight strokeWidth={3} stroke={`black`} />
            </View>
            <View className="my-3 flex-row items-center space-x-4">
              <Icon.CheckCircle strokeWidth={3} stroke={`black`} />
              <Text className="w-3/4 text-lg font-bold">Privacy Policy</Text>
              <Icon.ChevronRight strokeWidth={3} stroke={`black`} />
            </View>
            <View className="my-3 flex-row items-center space-x-4">
              <Icon.Layers strokeWidth={3} stroke={`black`} />
              <Text className="w-3/4 text-lg font-bold">
                Term And Condition
              </Text>
              <Icon.ChevronRight strokeWidth={3} stroke={`black`} />
            </View>
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
      width: 1,
      height: 2,
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
