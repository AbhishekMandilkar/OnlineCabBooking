import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MapScreen")}
      disabled={!origin}
      style={tw`bg-gray-200 rounded-lg p-4 flex-row justify-around items-center`}
    >
      <View style={tw`${!origin && "opacity-20"}`}>
        <Image
          style={{ width: 120, height: 120, resizeMode: "contain" }}
          source={{ uri: "http://links.papareact.com/3pn" }}
        />
        <Text style={tw`mt-2 text-lg font-semibold`}>Get a ride</Text>
      </View>
      <>
        <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          type="antdesign"
          color="white"
          name="arrowright"
        />
      </>
    </TouchableOpacity>
  );
};

export default NavOptions;
