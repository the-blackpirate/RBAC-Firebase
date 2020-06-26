// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
 apiKey: 'AIzaSyCGLqIneQw-3rUzi3KxprtZgqfK3YcbllI',
    authDomain: 'rbac-11.firebaseapp.com',
    databaseURL: 'https://rbac-11.firebaseio.com',
    projectId: 'rbac-11',
    storageBucket: 'rbac-11.appspot.com',
    messagingSenderId: '1097587033683',
    appId: '1:1097587033683:web:5d885a146791aaab4b28a6'
  },
  userApi: 'http://localhost:5000/rbac-11/us-central1/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
