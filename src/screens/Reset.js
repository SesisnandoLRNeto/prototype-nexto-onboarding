import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput, HelperText, Text, Divider } from 'react-native-paper';

const ResetScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const logo = require('../../assets/adaptive-icon.png');

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#0256ae',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        <View>
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 400,
            }}
            source={logo}
          ></Image>
          <View style={{ marginTop: -380, marginBottom: 100 }}>
            <TextInput
              style={styles.input}
              label='E-mail'
              placeholder='E-mail'
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <HelperText
              type='error'
              visible={!email.includes('@') && email !== ''}
            >
              Este email é inválido!
            </HelperText>
          </View>
        </View>
      </View>

      <Divider
        style={{
          width: 2000,
          height: 4,
          marginLeft: -230,
          marginBottom: -100,
        }}
      />

      <View
        style={{
          flex: 1,

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={styles.buttonContainerLogin}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Resetar a senha</Text>
          </TouchableOpacity>
        </View>
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
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainerLogin: {
    width: '80%',
    height: '24%',
    backgroundColor: '#0256ae',
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
  input: {
    minWidth: '80%',
  },
});

export default ResetScreen;
