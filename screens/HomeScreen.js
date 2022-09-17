/** @format */

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import * as Location from "expo-location";
import DateTime from "../components/DateTime";
import ForecastSection from "../components/ForecastSection";

function HomeScreen(props) {
  const API_KEY = "c81e94d5b62d2cfad31fcfceb2a069f7";

  const [location, setLocation] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    setTimeout(() => {
      load();
    });
  }, []);

  const load = async () => {
    // let { status } = await Location.;
    // if (!status) {
    //   return alert("Access to location is need");
    // }
    // const location = await Location.getCurrentPositionAsync();
    // const { latitude, longitude } = location.coords;
    // alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // setLocation({ latitude, longitude });

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    // console.log(location);
    setLocation(location);

    const { latitude, longitude } = location.coords;
    setLatitude(latitude);
    setLongitude(longitude);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const response = await fetch(weatherUrl);
    const result = await response.json();
    setResult(result);
    // console.log(result.main.humidity);

    // console.log(result.sys.sunrise);
  };

  // console.log(result);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundimg.png")}
        style={styles.imageBackground}
      >
        <DateTime
          latitude={result ? result.coord.lat : "...loading"}
          longitude={result ? result.coord.lon : "...loading"}
          timeZone={result ? result.sys.country : "...loading"}
          humidity={result ? result.main.humidity : "...loading"}
          pressure={result ? result.main.pressure : "...loading"}
          sunrise={result ? result.sys.sunrise : "...loading"}
          sunset={result ? result.sys.sunset : "...loading"}
        />
        <ForecastSection />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    resizeMode: "cover",
    justifyContent: "center",
    flex: 1,
  },
});

export default HomeScreen;
