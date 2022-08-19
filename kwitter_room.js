//  adding the firebase links!!!

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHwi5Aaq0eSVe_9isqUdxsgKGbe2yLc6E",
    authDomain: "kwitterc93toc97.firebaseapp.com",
    databaseURL: "https://kwitterc93toc97-default-rtdb.firebaseio.com",
    projectId: "kwitterc93toc97",
    storageBucket: "kwitterc93toc97.appspot.com",
    messagingSenderId: "289366238731",
    appId: "1:289366238731:web:803c3381e929787719490e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!!!";

function addRoom(){
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name on DB"
    });

        document.getElementById("room_name").value = "";
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_finalpage.html";
}




function getData() {  
        firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey; // already given code!!!

    //coding that needs to be done!!!
    //startCode

        console.log("Room Names:- " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;

    //endCode
    
 });
});
}
getData();




function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_finalpage.html";  
}




function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}