$(document).ready(function(){

//Initialize Firebase//
var firebaseConfig = {
    apiKey: "AIzaSyBi-O17PsVdUQGHlfY3qhoiIBpnbuKWpM4",
    authDomain: "test-7d555.firebaseapp.com",
    databaseURL: "https://test-7d555.firebaseio.com",
    projectId: "test-7d555",
    storageBucket: "",
    messagingSenderId: "98104578426",
    appId: "1:98104578426:web:c2908835db8c009512c6c3"
  };
 
  firebase.initializeApp(firebaseConfig);


  //vars for form 
  var name;
  var destination;
  var firstTrain
  var trainFrequency 

  $("#add-train").on("click", function() {
    event.preventDefault();

    // Storing new train data
    name = $("#inputTrain").val().trim();
    destination = $("#inputDestination").val().trim();
    firstTrain = $("#inputTrain1").val().trim();
    frequency = $("#frequencyT").val().trim();

    // Push to database
    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("form")[0].reset();
});
  
  //global variable//
  var currentTime 
  var timeDiff
  var timeRemaining
  var nextTrain
  var timeUntilNextTrain

  


  //process//
  $('').on('click', function(event){
    event.preventDefault();  
  function Time(){ 
      var firstTrainTime= moment(firstTrain, "HH:mm" ).subtract('1, "years');
      return moment ().diff(moment(firstTrainTime), 'minutes'); 
  }








}

// Assumptions
var trainFrequency = 3;

// Time is 3:30 AM
var firstTrain= "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var timeRemainder = diffTime % timeFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - timeRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
	//Calculate the next arrival's time
  nextTrain = calcNextArrival(tMinutesTillTrain);
  console.log("The next train will be here at: " + nextArrival);






