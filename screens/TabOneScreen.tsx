import * as React from "react";
import { StyleSheet, Pressable } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
export default function TabOneScreen() {
  const animation = useSharedValue(1);
  const naviggation = useNavigation();
  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(
        animation.value,
        {
          duration: 2000,
        },
        () => {
          animation.value = 1;
        }
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>animation1</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Pressable onPress={() => (animation.value = 0)}>
        <Animated.View
          style={[
            { width: 150, height: 150, backgroundColor: "pink" },
            animationStyle,
          ]}
        ></Animated.View>
      </Pressable>
      <Pressable
        onPress={() => {
          naviggation.navigate("StarPhoto");
        }}
        style={{ marginTop: 20, backgroundColor: "pink", padding: 5 }}
      >
        <Text>{"react-navigation-shared-element test"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
