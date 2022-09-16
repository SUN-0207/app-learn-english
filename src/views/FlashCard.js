import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

const FlashCard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E7F6F2" }}>
      <View
        style={{
          width: "100%",
          height: "7%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../images/back.png")}
            style={{ height: "100%", aspectRatio: 1 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, padding: 15 }}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            width: "100%",
            minHeight: "15%",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: "#A5C9CA",
          }}
          onPress={() => navigation.navigate("Animal")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              fontFamily: "montserrat_semi-bold",
            }}
          >
            Animal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            width: "100%",
            minHeight: "15%",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 15,
            backgroundColor: "#A5C9CA",
          }}
          onPress={() => navigation.navigate("Fruit")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              fontFamily: "montserrat_semi-bold",
            }}
          >
            Fruit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            width: "100%",
            minHeight: "15%",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 15,
            backgroundColor: "#A5C9CA",
          }}
          onPress={() => navigation.navigate("Job")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              fontFamily: "montserrat_semi-bold",
            }}
          >
            Job
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FlashCard;
