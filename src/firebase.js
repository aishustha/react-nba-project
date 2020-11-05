import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWbTVzwjPlDNLwUv-XxrlBacNanTMSSpI",
    authDomain: "nba-react-b5684.firebaseapp.com",
    databaseURL: "https://nba-react-b5684.firebaseio.com",
    projectId: "nba-react-b5684",
    storageBucket: "nba-react-b5684.appspot.com",
    messagingSenderId: "526874216467",
    appId: "1:526874216467:web:959aba7213c2990f4c17e6",
    measurementId: "G-CNPVTFYDD5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = []
       //grab snapshot
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key //firebase articles first key  id is equal to childsnapshot
        })
    });

    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
}

//connect with our applications