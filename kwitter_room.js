
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAHFA5r5ZB0-hH43zr6pbLRY4bTK-ouVmo",
      authDomain: "kwitter-2ab91.firebaseapp.com",
      databaseURL: "https://kwitter-2ab91-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ab91",
      storageBucket: "kwitter-2ab91.appspot.com",
      messagingSenderId: "40760777414",
      appId: "1:40760777414:web:81c2c210af2193b21d55c7"
    };

    firebase.initializeApp(firebaseConfig);

    //Welcome code

    input_name = localStorage.getItem("input_name")

    document.getElementById("input_name").innerHTML = "Welcome " + input_name + "!!!"

    //addRoom Function

    function logout() {
      
    }

      



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
