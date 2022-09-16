import React from "react";
import { ScrollView, View, Image, TouchableOpacity, Text } from "react-native";

const Sound = require("react-native-sound");
Sound.setCategory("Playback");

const Card = (props) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20 }}>
        {props.datas.map((data) => {
          const sound = new Sound(data.sound_src, (error) => {
            if (error) {
              console.log("failed to load the sound", error);
              return;
            }
          });
          sound.setVolume(1);
          return (
            <View
              style={{
                borderRadius: 15,
                borderWidth: 3,
                height: 350,
                padding: 15,
                justifyContent: "space-evenly",
                marginTop: 30,
                backgroundColor: "white",
              }}
              key={data.id}
            >
              <View style={{ width: "100%", height: "70%", borderWidth: 2 }}>
                <Image
                  source={data.img_src}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderWidth: 10,
                  }}
                />
              </View>
              <TouchableOpacity
                style={{
                  minWidth: "75%",
                  borderWidth: 1,
                  alignSelf: "center",
                  borderRadius: 20,
                }}
                onPress={() => {
                  sound.play();
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 30,
                    fontFamily: "montserrat_semi-bold",
                  }}
                >
                  {data.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Card;
