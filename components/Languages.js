import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LanguagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idiomas</Text>
      <Text>Português: Nativo</Text>
      <Text>Inglês: Avançado</Text>
      <Text>Alemão: Intermediário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
