import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogoComponent from './components/Logo';

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <LogoComponent />

      <View style={styles.buttonContainerLogin}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            textAlign: 'center',
            position: 'absolute',
            top: -42,
            alignSelf: 'center',
          }}
        >
          Sua comunidade
        </Text>
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

export default ExplorerScreen;
