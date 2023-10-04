import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
// import Svg, { Ellipse } from "react-native-svg";

function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          {/* <Svg viewBox="0 0 167.61 167.61" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={84}
              cy={84}
              rx={84}
              ry={84}
            ></Ellipse>
          </Svg> */}
          <View style={styles.rect2}></View>
        </View>
        <TouchableOpacity style={styles.rect3}>
          <Text style={styles.myProfile}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect4}>
          <Text style={styles.howToUse}>How to use</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect5}>
          <TouchableOpacity style={styles.versionRow}>
            <Text style={styles.version}>Version</Text>
            <Text style={styles.howToUse1}>3.13.4.9</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect6}>
          <Text style={styles.about}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 7,
    width: 360,
    height: 687,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  ellipse: {
    width: 168,
    height: 168,
    marginTop: 61,
    marginLeft: 96
  },
  rect2: {
    width: 360,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 78
  },
  rect3: {
    top: 307,
    left: 0,
    width: 375,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  myProfile: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 281,
    marginTop: 15,
    marginLeft: 27
  },
  rect4: {
    top: 357,
    left: 0,
    width: 375,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  howToUse: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 281,
    marginTop: 15,
    marginLeft: 27
  },
  rect5: {
    top: 407,
    left: 0,
    width: 375,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row"
  },
  version: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 200
  },
  howToUse1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 72,
    marginLeft: 49
  },
  versionRow: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 27,
    marginTop: 14
  },
  rect6: {
    top: 458,
    left: 0,
    width: 375,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  about: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 281,
    marginTop: 14,
    marginLeft: 27
  },
  rectStack: {
    width: 375,
    height: 687,
    marginTop: 73,
    marginLeft: -7
  }
});

export default Settings;
