import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Data from "../datas/Data_Alphabet.js";
import Letter from "./Letter.js";

var Sound = require("react-native-sound");
Sound.setCategory("Playback");

const ding = new Sound(require("../sounds/songabc.mp3"), (error) => {
  if (error) {
    console.log("failed to load the sound", error);
    return;
  }
});

function Alphabet({ navigation }) {
  const [checkSound, setCheckSound] = useState(true);

  useEffect(() => {
    checkSound ? ding.play() : ding.stop();
  }, [checkSound]);

  const soundButton = () => {
    setCheckSound(!checkSound);
  };

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
          onPress={() => {
            ding.stop();
            navigation.goBack();
          }}
        >
          <Image
            source={require("../images/back.png")}
            style={{ height: "100%", aspectRatio: 1 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => soundButton()}>
          {checkSound ? (
            <Image
              source={require("../images/audio.png")}
              style={{ height: "100%", aspectRatio: 1 }}
            />
          ) : (
            <Image
              source={require("../images/noaudio.png")}
              style={{ height: "100%", aspectRatio: 1 }}
            />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            padding: 6,
          }}
        >
          {Data.map((item) => {
            return <Letter item={item} key={item.id} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Alphabet;
