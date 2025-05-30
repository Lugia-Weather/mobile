import React, { useRef, useEffect } from "react";
import {
  Animated,
  Image,
  ImageSourcePropType,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Btn from "./Btn";

interface integranteProps {
  urlImage: ImageSourcePropType;
  name: string;
  github: string;
  rm: string;
}

export default function Integrante({
  urlImage,
  name,
  github,
  rm,
}: integranteProps) {
  const openUrl = (github: string) => {
    Linking.openURL(github);
  };

  const borderAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderAnim, {
          toValue: 2,
          duration: 5500,
          useNativeDriver: false,
        }),
        Animated.timing(borderAnim, {
          toValue: 1,
          duration: 5500,
          useNativeDriver: false,
        }),
        Animated.timing(borderAnim, {
          toValue: 0,
          duration: 5500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [borderAnim]);

  const borderColor = borderAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["#00e0ff", "#FF0000", "#00FF00"],
  });

  return (
    <Animated.View style={[styles.container, { borderColor }]}>
      <Image style={styles.participants} source={urlImage} />
      <Text style={styles.description}>{name}</Text>
      <Text style={styles.description}>{rm}</Text>
      <Btn txt="GitHub" pressFunc={() => openUrl(github)} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  description: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 4,
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    backgroundColor: "rgba(30, 30, 30, 0.8)",
    borderRadius: 20,
    padding: 20,
    marginVertical: 15,
    alignItems: "center",
    borderWidth: 3,
    shadowColor: "#00ffff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  participants: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
