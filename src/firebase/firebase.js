import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });
// database.ref('notes').push({
//     title: 'course',
//     body: 'angular'
// }); 
// database.ref('expenses').push({
//     id: '0',
//     description: 'nutt',
//     amount: 569,
//     createdAt: 0,
//     note: 'poop'

// });

// database.ref('expenses').once('value')
// .then((snapshot)=> {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// })


// database.ref('notes').set(notes);
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref().set({
//     age: 23,
//     stressLevel: 10,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'poop',
//         state: 'nutt'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => { 
//     console.log(error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Amazon',
//     'location/city': 'Seattle'
// });

