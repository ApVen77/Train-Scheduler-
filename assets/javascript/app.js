$(document).ready(function () {
  //Initialize Firebase//
  var firebaseConfig = {
    apiKey: "AIzaSyBi-O17PsVdUQGHlfY3qhoiIBpnbuKWpM4",
    authDomain: "test-7d555.firebaseapp.com",
    databaseURL: "https://test-7d555.firebaseio.com",
    projectId: "test-7d555",
    storageBucket: "",
    messagingSenderId: "98104578426",
    appId: "1:98104578426:web:fcb0cd6f3c5d514b12c6c3"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  //vars for form 
  var name;
  var destination;
  var firstTrain
  var trainFrequency

  $(document).on("click","#add-train", function () {
    event.preventDefault();
    // Storing new train data
    name = $("#inputTrain").val().trim();
    destination = $("#inputDestination").val().trim();
    firstTrain = $("#inputTrain1").val().trim();
    frequency = $("#frequencyT").val().trim();
    console.log("name of the train: " +name);

    // Push to database
    database.ref().push({
      name: name,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });


    // variables//


    database.ref().on("child_added", function (childSnapshot) {
      var nextTrain;
      var timeUntilNextTrain;
      // var currentTime;
      var timeDiff;
      var timeRemaining;
    

      // Change year 
      var firstTrainNew = moment(childSnapshot.val().firstTrain, "HH:mm").subtract(1, "years");
      //  Current and firstTrain differnce 
      var timeDiff = moment().diff(moment(firstTrainNew), "minutes");
      var timeRemaining = timeDiff % childSnapshot.val().frequency;
      // Time until next train in minutes
      var timeUntilNextTrain = childSnapshot.val().frequency - timeRemaining;
      // Next train arrival time
     // var nextT = moment().add(nextTrain, "minutes");
      var nextTrain = moment().add(timeUntilNextTrain,"m").format("HH:mm");

      $(".table > tbody").append("<tr><td>" + childSnapshot.val().name +
        "</td><td>" + childSnapshot.val().destination +
        "</td><td>" + childSnapshot.val().frequency +
        "</td><td>" + nextTrain +
        "</td><td>" + timeUntilNextTrain + "</td></tr>");
    });

// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
//   // Change the HTML to reflect
//   $("#inputTrain").html(snapshot.val().name);
//   $("#inputDestination").html(snapshot.val().email);
//   $("#inputTrain1").html(snapshot.val().age);
//   $("#frequencyT").html(snapshot.val().comment);
// });
  })
})
