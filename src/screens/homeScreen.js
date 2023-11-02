import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import * as Icon from "react-native-feather";
import ProductCard from "../component/productCard";

export default function HomeScreen() {
  const categories = ["man", "women", "accesories"];
  const navigation = useNavigation()

  return (
    <View className="flex-1 mx-5 pt-10">
      <ScrollView className="" showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center">
          <View className="bg-slate-600  p-3 rounded-full">
            <Icon.AlignLeft width={`23`} height={`23`} stroke={`white`} />
          </View>
          <Image
            source={require("../../assets/images/user.jpg")}
            className="h-12 w-12 rounded-full"
          />
        </View>
        <View className="mt-4">
          <Text className="text-3xl" >Welcome ,</Text>
          <Text className="text-3xl text-gray-400" >
            Our Fashion App
          </Text>
        </View>
        <View className="flex-row justify-between items-center mt-4">
          <View className="rounded-full bg-slate-300 p-3 w-5/6">
            <TextInput placeholder="Search" className="ml-3" />
          </View>
          <View className="bg-slate-600 p-3 rounded-full">
            <Icon.Search width={`23`} height={`23`} stroke={`white`} />
          </View>
        </View>
        <View
          className="bg-slate-200 p-3 rounded-2xl mt-8"
          style={styles.shadow}
        >
          <View className="flex-row items-center ">
            <Image
              source={require("../../assets/images/p1.jpg")}
              className="h-20 w-20 rounded-2xl"
            />
            <View className="flex space-y-1 ml-4 flex-1">
              <Text className="text-md font-bold">Axel Arigato</Text>
              <Text className="text-xs font-medium text-gray-500">
                Clean 90 Triple Sneakers
              </Text>
              <Text className="text-md font-bold">$ 245.00</Text>
            </View>
            <View className="bg-slate-600  p-2 rounded-xl">
              <Icon.ArrowRight height={`23`} width={`23`} color={`white`} />
            </View>
          </View>
        </View>
        {/* categories */}
        <View className="mt-8">
          <Text className="text-3xl">Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-3"
          >
            {categories.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=>navigation.navigate('Category')}>
                  <View className="bg-slate-300 p-3 py-2 mr-4 rounded-2xl">
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View className="mt-4 flex-row justify-between items-center">
          <Text className="text-xl">Top Dresses</Text>
          <Text className="text-md text-gray-600">View All</Text>
        </View>
          {/* product */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}}>
          <View className="mt-4 flex-row justify-between items-center">
            <ProductCard/>
            <ProductCard/>
          </View>
        </ScrollView>
      </ScrollView>
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
  bold:{
    fontFamily:"OSBold"
  },
  medium:{
    fontFamily:"OSMedium"
  },
  regular:{
    fontFamily:"OSRegular"
  },
  light:{
    fontFamily:"OSLight"
  },
  semibold:{
    fontFamily:"OSSemiBold"
  },
  bold:{
    fontFamily:"OSExtraBold"
  }
  
});
