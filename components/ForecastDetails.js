/** @format */
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function ForecastDetails(props) {
  const ForecastItem = () => {
    return (
      <View style={styles.forecastItemContainer}>
        <Text style={styles.dayText}>Monday</Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "http://openweathermap.org/img/wn/10d@2x.png" }}
        />
        <Text style={styles.tempText}>Day -455degrees</Text>
        <Text style={styles.tempText}>Night -36 degrees</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  forecastItemContainer: {
    margin: 5,
    marginHorizontal: 30,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    backgroundColor: "#00000033",
    justifyContent: "center",
    flex: 1,
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

export default ForecastDetails;
