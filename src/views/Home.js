import React, { Component, useState, useRef } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  ImageBackground,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/BgHome.png")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="stretch"
    >
      <StatusBar barStyle={"ligh-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: "20%",
            marginTop: "60%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              color: "#90AFC5",
              fontFamily: "montserrat_black",
            }}
          >
            Learn English
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Menu");
            }}
          >
            <LinearGradient
              style={{
                marginTop: 30,
                paddingLeft: 50,
                paddingRight: 50,
                borderRadius: 20,
                minWidth: "30%",
                height: "50%",
                justifyContent: "center",
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#000046", "#1CB5E0"]}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#DAE2B6",
                    backgroundColor: "transparent",
                    fontFamily: "montserrat_semi-bold",
                  }}
                >
                  Get Started
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Home;
