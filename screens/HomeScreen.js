import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
  Image,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import NavOptions from "../components/NavOptions";

import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={[{ paddingTop: 25 }, tw`bg-white h-full`]}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          enablePoweredByContainer={false}
          onPress={(data, details) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />
        <NavOptions />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
