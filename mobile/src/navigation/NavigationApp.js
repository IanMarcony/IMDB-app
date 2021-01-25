import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../views/Login";
import Home from "../views/Home";
import Register from "../views/Register";

const Stack = createStackNavigator();

const NavigationApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
