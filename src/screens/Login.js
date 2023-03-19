import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, HelperText, Text, Snackbar } from 'react-native-paper';
import { auth } from '../../firebaseConfig';
import AuthContext from '../utils/contexts/auth-context';

import LogoComponent from './components/Logo';

const LoginScreen = () => {
  const { signIn } = useContext(AuthContext);

  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const login = async () => {
    if (email !== '' && pass !== '') {
      await signInWithEmailAndPassword(auth, email, pass)
        .then((response) => {
          const newUser = {
            id: response.user.uid,
            name: response.user.displayName,
            email: response.user.email,
          };

          signIn(newUser);
          setEmail('');
          setPass('');

          navigation.navigate('Onboarding');
        })
        .catch((error) => {
          Alert.alert(error.code, error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <LogoComponent />

      <View style={styles.inputContainer}>
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
          Bem vindo de volta
        </Text>
        <TextInput
          style={styles.input}
          label='E-mail'
          placeholder='E-mail'
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <HelperText type='error' visible={!email.includes('@') && email !== ''}>
          Este email é inválido!
        </HelperText>

        <TextInput
          style={styles.input}
          mode='outlined'
          label='Senha'
          placeholder='Senha'
          value={pass}
          right={<TextInput.Icon icon='eye' />}
          onChangeText={(pass) => setPass(pass)}
        />
        <HelperText type='error' visible={pass !== '' && pass.length < 8}>
          Sua senha deve ter mais do que 8 caracteres!
        </HelperText>

        <TouchableOpacity onPress={() => login()} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
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
    marginTop: 250,
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
  input: {
    minWidth: '80%',
  },
});

export default LoginScreen;
