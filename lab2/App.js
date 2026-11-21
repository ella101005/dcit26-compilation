import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Ella Mae A. Sanchez</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>20</Text>

      <Text style={styles.label}>Course/Year/Section:</Text>
      <Text style={styles.value}>BS Computer Science, 3rd Year, Section 2</Text>

      <Text style={styles.label}>About Me:</Text>
      <Text style={styles.value}>
        I love baking and making myself a drink. I own Miji Bites! 
      </Text>

      <Text style={styles.label}>Achievements:</Text>
      <Text style={styles.value}>- I made a perfect recipes for cookies!</Text>
      <Text style={styles.value}>- I bought myself a phone! </Text>
      <Text style={styles.value}>- I'm selling out tons of pastries! </Text>

      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.value}>- Whisking a matcha</Text>
      <Text style={styles.value}>- Baking</Text>
      <Text style={styles.value}>- Time management</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#222222',
  },
});