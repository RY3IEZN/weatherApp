/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import ForecastDetails from "./ForecastDetails";

function ForecastSection(props) {
  const CurrentWeather = () => {
    return (
      <View style={styles.currentWeatherContainer}>
        <Image
          style={{
            width: 150,
            height: 150,
          }}
          source={{ uri: "http://openweathermap.org/img/wn/10d@2x.png" }}
        />
        {/* left hlaf */}
        <View>
          {/* button day */}
          <View>
            <Text style={styles.dayText}>Sunday</Text>
          </View>
          {/* others */}
          <View>
            <Text style={styles.tempText}>Night - 38degrees</Text>
            <Text style={styles.tempText}>day - 38degrees</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.forcastSection} horizontal>
        <CurrentWeather />
        <ForecastDetails />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  forcastSection: {
    backgroundColor: "#18181bcc",
    padding: 40,
  },
  currentWeatherContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 1,
  },
  dayText: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 10,
  },
  tempText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});

export default ForecastSection;
