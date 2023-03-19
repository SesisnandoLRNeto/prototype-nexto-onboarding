import { useNavigation } from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider, HelperText, Text, TextInput } from 'react-native-paper';
import { auth } from '../../firebaseConfig';
import BackButton from './components/BackButton';

const SignupScreen = () => {
  const navigation = useNavigation();
  const logo = require('../../assets/adaptive-icon.png');

  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const invalidButton = () => {
    return (
      (name.length < 8 && name !== '') ||
      (pass !== '' && pass.length < 8) ||
      (confirmPass !== '' && confirmPass.length < 8) ||
      (!email.includes('@') && email !== '')
    );
  };

  const signUp = async () => {
    if (!invalidButton()) {
      await createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              Alert.alert('Sucesso', 'Usuário foi criado', [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Login'),
                },
              ]);

              setName('');
              setEmail('');
              setPass('');
              setConfirmPass('');
            })
            .catch((error) => {
              Alert.alert(error.code, error.message);
            });
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
        });
    }
  };

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
          <BackButton />
          <Image
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}
            source={logo}
          ></Image>
          <View>
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
              Cadastro
            </Text>
            <TextInput
              style={styles.input}
              label='Name'
              placeholder='Name'
              value={name}
              onChangeText={(name) => setName(name)}
            />
            <HelperText type='error' visible={name.length < 8 && name !== ''}>
              Seu nome deve ter no mínimo 8 caracteres!
            </HelperText>
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

            <TextInput
              style={styles.input}
              mode='outlined'
              label='Senha'
              placeholder='Senha'
              value={pass}
              secureTextEntry
              right={<TextInput.Icon icon='eye' />}
              onChangeText={(pass) => setPass(pass)}
            />
            <HelperText type='error' visible={pass !== '' && pass.length < 8}>
              Sua senha deve ter mais do que 8 caracteres!
            </HelperText>

            <TextInput
              style={styles.input}
              mode='outlined'
              label='Confirmar senha'
              placeholder='Confirmar senha'
              secureTextEntry
              value={confirmPass}
              right={<TextInput.Icon icon='eye' />}
              onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
            />
            <HelperText
              type='error'
              visible={confirmPass !== '' && confirmPass.length < 8}
            >
              Sua senha deve ter mais do que 8 caracteres!
            </HelperText>
            <HelperText
              type='error'
              visible={confirmPass !== pass && confirmPass !== ''}
            >
              As senhas não são iguais!
            </HelperText>
          </View>
        </View>
      </View>

      <Divider
        style={{
          width: 2000,
          height: 4,
          marginLeft: -230,
          marginBottom: -250,
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
          <TouchableOpacity onPress={signUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
    marginTop: 100,
    width: '100%',
    backgroundColor: '#0256ae',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    width: 300,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
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
    minHeight: '10%',
  },
});

export default SignupScreen;
