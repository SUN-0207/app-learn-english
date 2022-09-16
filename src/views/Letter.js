import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";

const Sound = require("react-native-sound");
Sound.setCategory("Playback");

const Letter = (props) => {
  const sound_pronounce = new Sound(props.item.sound_src, (error) => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }
  });

  return (
    <TouchableOpacity onPress={() => sound_pronounce.play()}>
      <Image source={props.item.img_src} />
    </TouchableOpacity>
  );
};

export default Letter;
