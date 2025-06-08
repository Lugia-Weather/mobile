import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, ClipPath, Rect, G } from "react-native-svg";

interface WaterLevelGaugeProps {
  level: number;
}

const CIRCLE_SIZE = 150;
const RADIUS = CIRCLE_SIZE / 2 - 10;
const CENTER = CIRCLE_SIZE / 2;

const getStatus = (level: number) => {
  if (level <= 1.5) {
    return { text: "Seguro", color: "#27ae60" };
  }
  if (level <= 1.9) {
    return { text: "Risco de alagamento", color: "#f1c40f" };
  }
  return { text: "Alerta", color: "#e74c3c" };
};

export default function WaterLevel({ level }: WaterLevelGaugeProps) {
  const { text, color } = getStatus(level);

  const percent = Math.min(Math.max(level / 2, 0), 1);

  const waterHeight = CIRCLE_SIZE * percent;

  return (
    <View style={styles.container}>
      <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
        <Circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="#2980b9"
          strokeWidth={2}
          fill="#ecf0f1"
        />

        <ClipPath id="clip">
          <Circle cx={CENTER} cy={CENTER} r={RADIUS} />
        </ClipPath>

        <G clipPath="url(#clip)">
          <Rect
            x={0}
            y={CIRCLE_SIZE - waterHeight}
            width={CIRCLE_SIZE}
            height={waterHeight}
            fill="#5dade2"
          />
        </G>

        <Circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="#000"
          strokeWidth={1}
          fill="transparent"
        />
      </Svg>

      <Text style={[styles.status, { color }]}>{text}</Text>
      <Text style={styles.level}>nível da água: {level.toFixed(2)} m</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  level: {
    marginTop: 2,
    fontSize: 16,
    color: "white",
  },
});
