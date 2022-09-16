import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/views/Home";
import Menu from "./src/views/Menu";
import Alphabet from "./src/views/Alphabet";
import FlashCard from "./src/views/FlashCard";
import Animal from "./src/views/Animal";
import Fruit from "./src/views/Fruit";
import Job from "./src/views/Job";

import Calculator from "./src/views/Calculator";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Alphabet" component={Alphabet} />
        <Stack.Screen name="FlashCard" component={FlashCard} />
        <Stack.Screen name="Animal" component={Animal} />
        <Stack.Screen name="Fruit" component={Fruit} />
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
