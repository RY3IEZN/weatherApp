/** @format */

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import moment from "moment";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function DateTime({
  latitude,
  longitude,
  timeZone,
  humidity,
  sunrise,
  sunset,
  pressure,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  const WeatherItem = ({ title, value, unit }) => {
    return (
      <View style={styles.weatherItemContainer}>
        <Text style={styles.weatherItemTitle}>{title}</Text>
        <Text style={styles.weatherItemValue}>
          {value}
          {unit}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* time */}
      <View>
        <View>
          <Text style={styles.time}>{time ? time : "...loading"}</Text>
        </View>
        <View>
          <Text style={styles.date}>{date ? date : "...loading"}</Text>
        </View>
        <View style={styles.weatherDetails}>
          <WeatherItem title="Humidty" value={humidity} unit="%" />
          <WeatherItem title="pressure" value={pressure} unit="hPA" />
          <WeatherItem
            title="Sunrise"
            value={moment.unix(sunrise).format("HH:mm")}
            unit="am"
          />
          <WeatherItem
            title="Sunset"
            value={sunrise ? moment.unix(sunset).format("HH:mm") : "loading"}
            unit="pm"
          />
        </View>
      </View>
      {/* timzone and latit */}
      <View style={styles.timezoncontainer}>
        <Text style={styles.timeZone}>{timeZone} </Text>
        <Text style={styles.timeZone}>{humidity} </Text>
        <Text style={styles.latLon}>
          {latitude.toFixed(2)} {longitude.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: 50,
    padding: 15,
  },
  time: {
    fontSize: 45,
    color: "white",
    fontWeight: "700",
  },
  date: {
    fontSize: 25,
    color: "white",
    fontWeight: "300",
  },
  timezoncontainer: {
    textAlign: "right",
    marginTop: 15,
  },
  latLon: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  timeZone: {
    color: "white",
    textAlign: "right",
  },
  weatherDetails: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#18181b99",
    margin: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  weatherItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "200",
  },
  weatherItemValue: {
    color: "white",
    fontSize: 15,
    fontWeight: "200",
  },
});

export default DateTime;
