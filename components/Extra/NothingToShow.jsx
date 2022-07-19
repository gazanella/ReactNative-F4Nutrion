import { Text, StyleSheet, Animated } from "react-native";
import { useEffect, useState } from "react";

export default function NothingToShow({ label }) {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  
  /* Define a animação do texto. */
  function __init__() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      opacity: opacity,
    },
    tittle: {
      fontSize: 24,
      fontWeight: "300",
      color: "gray",
    },
  });

  useEffect(() => {
    __init__();
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Text style={styles.tittle}>No registered {label}.</Text>
    </Animated.View>
  );
}
