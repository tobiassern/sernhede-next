import * as firebaseClient from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

if (!firebaseClient.apps.length) {
  const CLIENT_CONFIG = {
    apiKey: "AIzaSyB5S6nyrYJ40zUSM5yhn7sdHIvyIy7LvxU",
    authDomain: "quister-ef44a.firebaseapp.com",
    databaseURL: "https://quister-ef44a.firebaseio.com",
    projectId: "quister-ef44a",
    storageBucket: "quister-ef44a.appspot.com",
    messagingSenderId: "179526293769",
    appId: "1:179526293769:web:c41e93eb7d4021b52e1bd8"
  };

  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    //.setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
}

export { firebaseClient };