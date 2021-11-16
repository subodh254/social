var firebaseConfig = {
    apiKey: "AIzaSyDGGupCOIugEQIY7blotmtYku44Feda2lQ",
    authDomain: "kwitter-b5f6c.firebaseapp.com",
    databaseURL: "https://kwitter-b5f6c-default-rtdb.firebaseio.com",
    projectId: "kwitter-b5f6c",
    storageBucket: "kwitter-b5f6c.appspot.com",
    messagingSenderId: "737750658103",
    appId: "1:737750658103:web:f7beb6f7cd6d63faa063b2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function add_user()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}