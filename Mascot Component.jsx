import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const MascotAnimation = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/mascot-animation.json')} // Lottie JSON file
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.mascotText}>
        Hi! I’m T.L., here to make learning fun. Let’s start studying! 🚀
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  mascotText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default MascotAnimation;
