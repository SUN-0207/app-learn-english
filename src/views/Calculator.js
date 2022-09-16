import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Calculator = () => {
  const [currentState, setCurrentState] = useState("");
  const [preState, setPreState] = useState("");
  const [screenState, setScreenState] = useState("");
  const [operator, setOperator] = useState("");

  const PressButtonNumber = (number) => {
    setScreenState(screenState + number);
  };

  const PressButtonOperator = (operation) => {
    if (operator != "") {
      console.log("gau");
      PressButtonEqual();
    }
    setOperator(operation);
    setCurrentState(screenState);
    setPreState(screenState + operation);
    setScreenState("");
  };

  const PressButtonEqual = () => {
    if (currentState && screenState) {
      switch (operator) {
        case "+":
          setPreState(preState + screenState);
          setScreenState(
            (parseFloat(currentState) + parseFloat(screenState)).toFixed(4)
          );
          break;
        case "-":
          setPreState(preState + screenState);
          setScreenState(
            (parseFloat(currentState) - parseFloat(screenState)).toFixed(4)
          );
          break;
        case "*":
          setPreState(preState + screenState);
          setScreenState(
            (parseFloat(currentState) * parseFloat(screenState)).toFixed(4)
          );
          break;
        case "/":
          setPreState(preState + screenState);
          setScreenState(
            (parseFloat(currentState) / parseFloat(screenState)).toFixed(4)
          );
          break;
      }
      return;
    }
  };

  const PressButtonCancel = () => {
    setOperator("");
    setScreenState("");
    setCurrentState("");
    setPreState("");
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.3,
            borderWidth: 4,
            borderColor: "white",
            justifyContent: "flex-end",
            alignContent: "flex-end",
          }}
        >
          <Text style={{ color: "white", alignSelf: "flex-end", fontSize: 30 }}>
            {preState}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              alignSelf: "flex-end",
              fontSize: 50,
            }}
          >
            {screenState}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", flex: 1 / 5 }}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonCancel()}
            >
              <Text style={styles.number}>C</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
                { flex: 2 / 4 },
              ]}
              onPress={() => setScreenState(screenState.slice(0, -1))}
            >
              <Text style={styles.number}>DEL</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonOperator("/")}
            >
              <Text style={styles.number}>/</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", flex: 1 / 5 }}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("1")}
            >
              <Text style={styles.number}>1</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("2")}
            >
              <Text style={styles.number}>2</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("3")}
            >
              <Text style={styles.number}>3</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonOperator("*")}
            >
              <Text style={styles.number}>*</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", flex: 1 / 5 }}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("4")}
            >
              <Text style={styles.number}>4</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("5")}
            >
              <Text style={styles.number}>5</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("6")}
            >
              <Text style={styles.number}>6</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonOperator("+")}
            >
              <Text style={styles.number}>+</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", flex: 1 / 5 }}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("7")}
            >
              <Text style={styles.number}>7</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("8")}
            >
              <Text style={styles.number}>8</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber("9")}
            >
              <Text style={styles.number}>9</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonOperator("-")}
            >
              <Text style={styles.number}>-</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", flex: 1 / 5 }}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonNumber(".")}
            >
              <Text style={styles.number}>.</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
                { flex: 2 / 4 },
              ]}
              onPress={() => PressButtonNumber("0")}
            >
              <Text style={styles.number}>0</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "black",
                },
                styles.button,
              ]}
              onPress={() => PressButtonEqual()}
            >
              <Text style={styles.number}>=</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1 / 4,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  number: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});

export default Calculator;
