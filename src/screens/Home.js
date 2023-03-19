import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LogoComponent from './components/Logo';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const HomeScreen = () => {
  const navigation = useNavigation();

  const provider = new GoogleAuthProvider();

  const pagerRef = useRef(null);

  const googleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

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
          Como deseja entrar?
        </Text>
        <TouchableOpacity onPress={googleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Continue com sua conta Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={googleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Continue com sua conta Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainerText}>
        <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
          <Text style={styles.linkText}> Resetar a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Singup')}>
          <Text style={styles.linkText}>Não possui conta? Crie uma</Text>
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
