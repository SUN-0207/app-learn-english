import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";

import Data_Job from "../datas/Data_Job.js";
import Card from "../components/Card.js";

const Job = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F5C7" }}>
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
      <Card datas={Data_Job} />
    </SafeAreaView>
  );
};

export default Job;
