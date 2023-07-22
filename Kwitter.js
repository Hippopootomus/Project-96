
var firebaseConfig = {
    apiKey: "AIzaSyCBJLMrY1Nmp_yYVMs1Q8m2JhW0ub2JkSc",
    authDomain: "project94-a6945.firebaseapp.com",
    projectId: "project94-a6945",
    storageBucket: "project94-a6945.appspot.com",
    messagingSenderId: "928534038277",
    appId: "1:928534038277:web:289ef956d5153ebbef596c"
  };
  
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name); 
    window.location = "kwitter_room.html";

}

