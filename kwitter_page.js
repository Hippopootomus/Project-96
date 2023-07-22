var firebaseConfig = {
  apiKey: "AIzaSyBfhkD3bZGnRtL3tKR3Ch03hkWUFfaFwpE",
  authDomain: "let-s-chat-web-app-a04e0.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-a04e0-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-a04e0",
  storageBucket: "let-s-chat-web-app-a04e0.appspot.com",
  messagingSenderId: "241412503803",
  appId: "1:241412503803:web:8c7422782468788b09d85e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);user_name = localStorage.getItem("user_name");

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
  firebase
    .database()
    .ref("/" + room_name)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code

          //End code
        }
      });
    });
}
getData();

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0,
  });

  document.getElementById("msg").value = "";
}
