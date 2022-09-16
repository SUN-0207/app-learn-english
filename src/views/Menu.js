import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  ImageBackground,
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Menu({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E7F6F2" }}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "7%",
          marginTop: 10,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../images/back.png")}
          style={{ height: "100%", aspectRatio: 1 }}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.box, styles.shadowProp]}
          onPress={() => navigation.navigate("Alphabet")}
        >
          <View>
            <Text style={styles.title}>Alphabet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("FlashCard")}
        >
          <View>
            <Text style={styles.title}>Flash Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 8,
  },
  box: {
    minWidth: "45%",
    minHeight: "20%",
    backgroundColor: "#A5C9CA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
  },
  title: {
    color: "#395B64",
    fontSize: 25,
    fontFamily: "montserrat_semi-bold",
  },
});

export default Menu;
