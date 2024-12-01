import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MascotScreen = () => {
  return (
    <View style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Testline!</Text>
      </View>
      
      {/* Mascot Section */}
      <View style={styles.mascotContainer}>
        <Image
          source={require('./assets/testline-mascot.png')} // Mascot image file
          style={styles.mascotImage}
        />
        <Text style={styles.mascotText}>
          Hi there! I'm T.L., your learning buddy. Ready to ace your tests today? 🎓
        </Text>
      </View>
      
      {/* Call-to-Action */}
      <View style={styles.cta}>
        <Text style={styles.ctaText}>Tap below to start your journey!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  mascotContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  mascotImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  mascotText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
  cta: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MascotScreen;
