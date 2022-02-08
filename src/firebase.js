// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBww5qQQi3MLXhqZ0GNEZ6rQqmDjvx2zig',
	authDomain: 'react-login-c6640.firebaseapp.com',
	projectId: 'react-login-c6640',
	storageBucket: 'react-login-c6640.appspot.com',
	messagingSenderId: '296235431708',
	appId: '1:296235431708:web:5d0a4f37117c3cc81bacd9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
