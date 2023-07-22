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

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   });});}
getData(); 

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}