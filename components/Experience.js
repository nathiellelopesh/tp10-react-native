import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExperienceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text>Empresa: Estratégia Consursos</Text>
      <Text>Cargo: Cadastradora</Text>
      <Text>Duração: 2020 - Presente</Text>
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
