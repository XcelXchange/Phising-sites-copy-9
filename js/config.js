const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  const firebaseConfig2 = {
    apiKey: "AIzaSyAIQMhJBufZ5fhzQ2JUQsC8O-FiEU5vOGQ",
    authDomain: "sara-lance.firebaseapp.com",
    databaseURL: "https://sara-lance-default-rtdb.firebaseio.com",
    projectId: "sara-lance",
    storageBucket: "sara-lance.appspot.com",
    messagingSenderId: "949456759005",
    appId: "1:949456759005:web:08d613dd1f8239815a9334",
    measurementId: "G-1XC50CDJED"
  }
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  