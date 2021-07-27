import React, { FunctionComponent, useState } from "react";
import { Image, View, StyleSheet, Pressable } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation, StackActions } from "@react-navigation/native";
import { StarImage } from "../../models";
import { TouchableOpacity } from "react-native-gesture-handler";

export const PhotoList: FunctionComponent = () => {
  const navigation = useNavigation();
  const [images, setImages] = useState<StarImage[]>([
    {
      avatar:
        "https://f11.baidu.com/it/u=951781648,1642692825&fm=170&s=C8B015D77033A59C31BCC9B10300A041&w=640&h=520&img.PNG&access=215967316",
      id: "liqin",
      des: "小医仙",
    },
  ]);
  return (
    <View style={[style.container]}>
      <TouchableOpacity
        onPress={() => {
          //   navigation.dispatch(
          //     StackActions.push("photoDetail", { image: images[0] })
          //   );
          navigation.navigate("photoDetail", { image: images[0] });
        }}
      >
        <SharedElement id={`starName_${images[0].id}`}>
          <Image
            source={{
              uri: images[0].avatar,
            }}
            style={{ width: 200, height: 180 }}
          />
        </SharedElement>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
