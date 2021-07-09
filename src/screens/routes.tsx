import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import Login from "./Login";
import Home from "./Home";

const StackNavigator = stackNavigatorFactory();

export const Routes = () => (
  <stackLayout iosIgnoreSafeArea={false} row={1}>
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <StackNavigator.Screen
          name="Login"
          options={{

          }}
          component={Login}
        />
        <StackNavigator.Screen
          name="Home"
          options={{

          }}
          component={Home}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  </stackLayout>
);
