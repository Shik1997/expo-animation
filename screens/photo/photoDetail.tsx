import React, { FunctionComponent } from "react";
import { View, Image, Text } from "react-native";
import { StarImage } from "../../models";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import dimensions from "../../constants/Layout";
import { TouchableOpacity } from "react-native-gesture-handler";
type PhotoDetailParams = {
  data: {
    image: StarImage;
  };
};

export const PhotoDetail: FunctionComponent = (props) => {
  const route = useRoute<RouteProp<PhotoDetailParams, "data">>();
  const navigation = useNavigation();
  const { image } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <SharedElement id={`starName_${image.id}`}>
        <Image
          source={{ uri: image.avatar }}
          style={{
            width: dimensions.window.width,
            height: dimensions.window.width * 0.9,
          }}
        />
      </SharedElement>
      <TouchableOpacity
        style={{ marginTop: 100 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>{"back to previous"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
