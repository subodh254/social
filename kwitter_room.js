
//ADD YOUR FIREBASE LINKS HERE
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


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function add_room()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       
      console.log("room_name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >8"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
