import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://media.licdn.com/dms/image/v2/D4D22AQEa2P_7ptojeA/feedshare-shrink_800/feedshare-shrink_800/0/1727383747442?e=2147483647&v=beta&t=2iFlqdaMn4sDOFsxnI7To-mdyZcxxlPpSTAdi0QqC68',
        }}
        style={styles.profileImage}
      />
      <Text style={styles.title}>Informações Pessoais</Text>
      <Text style={styles.infoText}>Nome: Nathielle</Text>
      <Text style={styles.infoText}>Contato: nathielle.email@exemplo.com</Text>
      <Text style={styles.infoText}>Localização: Foz do Iguaçu - PR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});
