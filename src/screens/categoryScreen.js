import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../component/productCard";

export default function CategoryScreen() {
  const x = useNavigation();
  return (
    <View className="flex-1 mx-5 pt-6">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="flex-row justify-between items-center mt-5">
          <TouchableOpacity onPress={() => x.navigate("Home")}>
            <Icon.ArrowLeftCircle
              height="30"
              width="30"
              stroke="black"
              strokeWidth={2}
            />
          </TouchableOpacity>
        </View>
        <View className="mt-4 flex-row justify-between items-center">
          <Text className="text-xl font-bold tracking-widest">Clothes</Text>
        </View>
        {/* product */}
        <ScrollView>
          <View className="mt-4 flex-row justify-between items-center">
           <ProductCard/>
           <ProductCard/>
          </View>
       
        </ScrollView>
      </ScrollView>
    </View>
  );
}
