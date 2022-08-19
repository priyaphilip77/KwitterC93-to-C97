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
room_name = localStorage.getItem("room_name");

function send(){
    msg =  document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    
    //startCode
    console.log(firebase_message_id);
    console.log(message_data);

    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];

    name_with_tag = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = " <button  onclick='updateLike(this.id)'  class='btn btn-warning'  value="+like+"  id="+firebase_message_id+" >";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>  LIKES :  "+ like + "</span></button><hr>";
    
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;

    //endCode

    } });  }); }
    getData();




    function updateLike(message_id){
        console.log("clicked on like button - " + message_id);
        button_id = message_id;
        
        likes = document.getElementById(button_id).value;
        updated_likes = Number(likes) + 1;
        console.log(updated_likes);

        firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
        });
    }




    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
    }
