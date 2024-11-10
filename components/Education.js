import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EducationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text>Graduação: Bacharelado em Engenharia de Materiais</Text>
      <Text>Universidade: Infnet</Text>
      <Text>Ano de Conclusão: 2027</Text>
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
