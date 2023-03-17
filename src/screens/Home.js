import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-paper';

const HomeScreen = () => {
  const logo = require('../../assets/adaptive-icon.png');

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 300,
            height: 300,
            marginBottom: -100,
          }}
          source={logo}
        ></Image>
      </View>

      <View style={styles.buttonContainer}>
        <Divider style={{ width: 2000, height: 4, marginLeft: -230 }} />
      </View>

      <View style={styles.buttonContainerLogin}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue com sua conta Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue com sua conta Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainerText}>
        <TouchableOpacity>
          <Text> Reset Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Não possui conta? Crie uma</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0256ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    width: '80%',
    height: '24%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainerLogin: {
    marginTop: 200,
    width: '80%',
    height: '24%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    flexShrink: 1,
    alignSelf: 'center',
    color: '#0256ae',
  },

  buttonContainerText: {
    width: '80%',
    marginTop: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  linkText: {
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#FFFFFF',
    marginBottom: 12,
  },
});

export default HomeScreen;
