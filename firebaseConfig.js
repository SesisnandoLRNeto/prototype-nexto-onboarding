// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMjHlcFy0ACcFl5r9_GwsFm6kCk2J7B68',
  authDomain: 'onboarding-nexto-de40d.firebaseapp.com',
  projectId: 'onboarding-nexto-de40d',
  storageBucket: 'onboarding-nexto-de40d.appspot.com',
  messagingSenderId: '292611797661',
  appId: '1:292611797661:web:7cfc1171f7a9bdde2d9a74',
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
