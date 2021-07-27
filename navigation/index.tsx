/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { PhotoList, PhotoDetail } from "../screens/photo";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
      {/* <StarPhotoNavigator /> */}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name={"StarPhoto"} component={StarPhotoNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const StarPhotoStack = createSharedElementStackNavigator();
function StarPhotoNavigator() {
  return (
    <StarPhotoStack.Navigator
      initialRouteName={"photoList"}
      headerMode={"none"}
      mode={"modal"}
    >
      <StarPhotoStack.Screen name={"photoList"} component={PhotoList} />
      <StarPhotoStack.Screen
        name={"photoDetail"}
        component={PhotoDetail}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { image } = route.params;
          return [`starName_${image.id}`];
        }}
      />
    </StarPhotoStack.Navigator>
  );
}
