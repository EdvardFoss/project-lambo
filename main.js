// GET COOKIE WITH PLAYER NAMES
var allPlayers // array with all players

// JSON ARRAY CONTAING ID AND QUESTION
var allQuestions = {};
allQuestions.entries = new Array();

var current_game_questions = {};
current_game_questions.entries = new Array();

//memory array
var memoryArray = {};
memoryArray = new Array();

var memoryType4Array = {};
memoryType4Array = new Array();

// DELETED QUESTIONS
var deleted_question_IDs = [];

function onpoop() {

  allPlayers = $.cookie("allPlayers");
  allPlayers = JSON.parse(allPlayers);
}
onpoop();

function getQuestions() {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                //console.log(response);
                var obj = JSON.parse(response);
                //console.log(obj);
                // SPLIT UP IN ARRAYS BASED ON TYPE

                var tall = allPlayers.length;
                var j = 0;
                var playerIndexThisCard;
                var playerNameThisCard;
                var newString;
                var addedName="Balletissfaenskap";

                for (var i = 0; i < obj.length; i++) {

                  if (obj[i].type === '1') {
                    // TRUTH
                    j = 0;
                    addedName="koko";
                    playerIndexThisCard = Math.floor(Math.random()*tall);
                    playerNameThisCard = allPlayers[playerIndexThisCard];

                    while (j < 5) { // NOT MORE THAN 5 PLAYER_NAMES!!!!

                    	while(addedName==playerNameThisCard){
                       			playerIndexThisCard = Math.floor(Math.random()*tall);
                            playerNameThisCard = allPlayers[playerIndexThisCard];
                      }

                      newString = (obj[i].question).replace("PLAYER_NAME", playerNameThisCard);

                      obj[i].question = newString;
                      j++;
                      addedName=playerNameThisCard;

                      playerIndexThisCard = Math.floor(Math.random()*tall);
                    	playerNameThisCard = allPlayers[playerIndexThisCard];
                    }

											allQuestions.entries.push({
                        "qID" : obj[i].ID,
                       	"ID" : obj[i].linkedTo,
                        "Type" : "1",
                        "Question" : newString
                      });
                     //question_truth.push(newString);
                     //console.log(question_truth);
                     //console.log(allQuestions);
                  }

                    else if (obj[i].type === '2') {
											// DARE
                      j = 0;
                      addedName="koko";
                      playerIndexThisCard = Math.floor(Math.random()*tall);
                      playerNameThisCard = allPlayers[playerIndexThisCard];

                      while (j < 5) { // NOT MORE THAN 5 PLAYER_NAMES!!!!

                        while(addedName==playerNameThisCard){
                         			playerIndexThisCard = Math.floor(Math.random()*tall);
                              playerNameThisCard = allPlayers[playerIndexThisCard];
                        }

                        newString = (obj[i].question).replace("PLAYER_NAME", playerNameThisCard);

                        obj[i].question = newString;
                        j++;
                        addedName=playerNameThisCard;

                        playerIndexThisCard = Math.floor(Math.random()*tall);
                      	playerNameThisCard = allPlayers[playerIndexThisCard];
                      }
                        allQuestions.entries.push({
                        "qID" : obj[i].ID,
                       	"ID" : obj[i].linkedTo,
                        "Type" : "2",
                        "Question" : newString
                       });
                       //question_dare.push(newString);
                      //console.log(question_dare);

                    }

                  else if (obj[i].type === '3') {
                    // MEMORY
                    j = 0;
                    addedName="koko";
                    playerIndexThisCard = Math.floor(Math.random()*tall);
                    playerNameThisCard = allPlayers[playerIndexThisCard];

                    //while (j < 5) { // NOT MORE THAN 5 PLAYER_NAMES!!!!

                      /*
                      while(addedName==playerNameThisCard){
                       			playerIndexThisCard = Math.floor(Math.random()*tall);
                            playerNameThisCard = allPlayers[playerIndexThisCard];
                      */

                      newString = (obj[i].question).replace("PLAYER_NAME", playerNameThisCard);

                      // store in memory array

                      obj[i].question = newString;
                      j++;
                      //addedName=playerNameThisCard;

                      //playerIndexThisCard = Math.floor(Math.random()*tall);
                    	//playerNameThisCard = allPlayers[playerIndexThisCard];
                    //}

                    if (obj[i].ID == '0') {

                    } else {
                      memoryArray.push({
                        "qID" : obj[i].ID,
                        "ID" : obj[i].linkedTo,
                        "player_name" : playerNameThisCard
                      });
                      //console.log(memoryArray);
                    }

                     //question_memory.push(newString);
                     allQuestions.entries.push({
                      "qID" : obj[i].ID,
                     	"ID" : obj[i].linkedTo,
                      "Type" : "3",
                      "Question" : newString
                     });

                    //console.log(allQuestions);
                    //console.log(question_memory);
                  }

                  else if (obj[i].type === '4') {
                    // LINKED TO
                    j = 0;
                    addedName="koko";

                    //loop through memoryArray for matchind ID
                    for (var j = 0; j < memoryArray.length; j++) {

                      if (memoryArray.ID == null) {

                      } else {

                        if (memoryArray.ID[j] == obj[i].linkedTo) {

                          playerNameThisCard = memoryArray.player_name[j];

                        }
                    }

                    }

                    newString = (obj[i].question).replace("MEMORY_NAME", playerNameThisCard);

                    memoryType4Array.push({
                      "qID" : obj[i].ID,
                      "ID" : obj[i].linkedTo,
                      "Type" : "4",
                      "Question" : newString
                    });

                    allQuestions.entries.push({
                      "qID" : obj[i].ID,
                     	"ID" : obj[i].linkedTo,
                      "Type" : "4",
                      "Question" : newString
                     });
                    //question_linkedTo.push(obj[i].question);
                    //console.log(question_linkedTo);
                  }

                  else if (obj[i].type === '5') {
                    // MULTIPLAYER
                    j = 0;
                    addedName="koko";
                    playerIndexThisCard = Math.floor(Math.random()*tall);
                    playerNameThisCard = allPlayers[playerIndexThisCard];

                    while (j < 5) { // NOT MORE THAN 5 PLAYER_NAMES!!!!


                      while(addedName==playerNameThisCard) {

                       			playerIndexThisCard = Math.floor(Math.random()*tall);
                            playerNameThisCard = allPlayers[playerIndexThisCard];
                      }
                      newString = (obj[i].question).replace("PLAYER_NAME", playerNameThisCard);

                      obj[i].question = newString;
                      j++;
                      addedName=playerNameThisCard;

                      playerIndexThisCard = Math.floor(Math.random()*tall);
                    	playerNameThisCard = allPlayers[playerIndexThisCard];
                    }

                    	allQuestions.entries.push({
                      "qID" : obj[i].ID,
                     	"ID" : obj[i].linkedTo,
                      "Type" : "5",
                      "Question" : newString
                     });

                     //question_multiplayer.push(newString);
                    //console.log(question_multiplayer);
                  }

                  else if (obj[i].type === '6') {
                    // ALL
                    allQuestions.entries.push({
                      "qID" : obj[i].ID,
                     	"ID" : obj[i].linkedTo,
                      "Type" : "6",
                      "Question" : obj[i].question
                     });
                    //question_all.push(obj[i].question);

                  }

                }
                //console.log(allQuestions.entries);
                createGame();
            }
        };
        xmlhttp.open("GET", "http://192.81.223.225/api/index.php", true);
        xmlhttp.send();

}
  getQuestions();

  function createGame() {

    var players = allPlayers;

    //-----------------------------------------
    // randomizer
    var start = 0;
    var end = allQuestions.entries.length;

    var randomNumber;

    var randomNumberThatHaveBeenUsed = new Array();

    var game_length = (players.length)*5; // total number of questions

    // aboslute numbers
    var qTruth_count = Math.floor((game_length/100) * 30); // 30 %
    var qDare_count = Math.floor((game_length/100) * 25); // 25 %
    var qMemory_count = 1;
    // Math.floor((game_length/100) * 15); // 15 %
    var qMultiplayer_count = Math.floor((game_length/100) * 15); // 15 %
    var qAll_count = Math.floor((game_length/100) * 15); // 15 %

    for (var i = 0; i < allQuestions.entries.length; i++) {

      randomNumber = randomizeNumber(start, end);
      randomNumberThatHaveBeenUsed.push(randomNumber); // not used yet

      if (allQuestions.entries[randomNumber].Type == '1') {

        if (qTruth_count >= 0) { // push to array

          current_game_questions.entries.push({
            "qID" : allQuestions.entries[randomNumber].qID,
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "1",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qTruth_count--;
        }

      } else if (allQuestions.entries[randomNumber].Type == '2') {

        if (qDare_count >= 0) { // push to array

          current_game_questions.entries.push({
            "qID" : allQuestions.entries[randomNumber].qID,
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "2",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qDare_count--;
        }

      } else if (allQuestions.entries[randomNumber].Type == '3') {

        if (qMemory_count > 0) { // push to array

          current_game_questions.entries.push({
            "qID" : allQuestions.entries[randomNumber].qID,
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "3",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qMemory_count--;
        }


      } else if (allQuestions.entries[randomNumber].Type == '5') {

        if (qMultiplayer_count >= 0) { // push to array

          current_game_questions.entries.push({
            "qID" : allQuestions.entries[randomNumber].qID,
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "5",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qMultiplayer_count--;
        }


      } else if (allQuestions.entries[randomNumber].Type == '6') {

        if (qAll_count >= 0) { // push to array

          current_game_questions.entries.push({
            "qID" : allQuestions.entries[randomNumber].qID,
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "6",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qAll_count--;
        }
      }
    }
    //console.log(current_game_questions);
    checkIfDuplicateQuestion();

  }

  function randomizeNumber(start, end) {

    var number = Math.floor(Math.random() * end) + start;

    return number;

  }
  //-----------------------------------------------------------------
  var game_counter = -1;
  var status;

  function gameCounter() {

    game_counter++;
    return game_counter;
  }
  //-----
  function checkIfDuplicateQuestion() {

    var qIDArray = [];

    for (var i = 0; i < current_game_questions.entries.length; i++) {
      qIDArray.push(current_game_questions.entries[i].qID);
    }
    var count = {};
    qIDArray.forEach(function(i) {
      count[i] = (count[i]||0) + 1;
    });
    console.log(count);

    for (var i = 0; i < count.length; i++) {

      if (count[i] > 1) {
        console.log("ballefarn");
        delete current_game_questions.entries[i];
      }
    }

    console.log(current_game_questions);



    sortOutMemoryPosition();

  }
  //-----
  // memory in game array
  var memoryInGameArray = {};
  memoryInGameArray = new Array();

  function sortOutMemoryPosition() {

    var game_length = current_game_questions.entries.length;

    for (var i = 0; i < current_game_questions.entries.length; i++) {

      if (current_game_questions.entries[i].Type == '3') {

        if (i > Math.floor(game_length/100*50)) {

          // reposition memory question
          // overwrite question below 50%
          console.error("Type 3 question in second half of array");

          // get random number from first half of the questions
          var firstHalfNumber = Math.floor(Math.random() * Math.floor(game_length/100*50)) + 1;

          // ensure minimum number of cards between memory cards to be 2 OR MORE.
          while (firstHalfNumber <= 2) {
         	  firstHalfNumber = Math.floor(Math.random() * Math.floor(game_length/100*50)) + 1;
        	}

          console.log("First half random number = "+ firstHalfNumber);
          console.log("i in for loop = "+ i);

          // overwrite random question

          console.log("Changing array...");

          current_game_questions.entries[firstHalfNumber].ID = current_game_questions.entries[i].ID;
          current_game_questions.entries[firstHalfNumber].Type = current_game_questions.entries[i].Type;
          current_game_questions.entries[firstHalfNumber].Question = current_game_questions.entries[i].Question;

          // delete old position, otherwise it will duplicate
          delete current_game_questions.entries[i];

        }
      }
    }
    //console.log(current_game_questions);
    game();
  }

  var restart;

  function game(clicked_id) {

    if (clicked_id == 'restart') {
      window.location = "";
    }

    status = 1;
    //console.log(current_game_questions);

    // color identifiers
    var truth_color = 'assets/images/greenBack.jpg'; //green
    var dare_color = 'assets/images/blueBack.jpg'; //blue
    var memory_color = 'assets/images/burgBack.jpg'; // #6b1313
    var multiplayer_color = 'assets/images/orangeBack.jpg'; // orange
    var all_color = 'assets/images/redBack.jpg'; //red

    var game_counter = gameCounter();
    var game_length = current_game_questions.entries.length;
    //console.log("Game length: "+ game_length);

    if (game_counter == game_length) {

      status = 0;
      console.log(game_counter +" og "+ game_length);

      console.log("Game finished");

      var html = "";
          html += '<h4 style="color:white;">Spillet er ferdig!</h4>';
          html += '<button style="border: 1px solid white;border-radius:14px;background:white;margin-right:20px;" onclick="returnToMenu()"><p style="text:center;color:black;">Returner til meny</p></button>';
          html += '<button id="restart" style="border: 1px solid white;border-radius:14px;background:white;" onclick="game(this.id)"><p style="text:center;color:black;">Start på nytt</p></button>';

      document.getElementById("question-div").innerHTML = html;

    } else {

      if (current_game_questions.entries[game_counter].Type == '3') {

        $('body').css('background-image', 'url('+ memory_color +')');

        document.getElementById("game-question").innerHTML = current_game_questions.entries[game_counter].Question;

        memoryInGameArray.push({
          "ID" : current_game_questions.entries[game_counter].ID,
          "count" : game_counter,
          "appear" : game_counter + Math.floor(game_length/100*20), // when type 4 will appear
          "appeared" : '0'
        });
        //console.log(memoryInGameArray);

      } else {

        if (memoryInGameArray.length > 0) { // if array is not empty

          //if (memoryInGameArray[0].appeared == '0') {

          var memarr_counter = 0;
          //while (memarr_counter <= memoryInGameArray.length) { // loop through length of array

            if (game_counter == memoryInGameArray[0].appear) { // game_counter matches appear

              for (var i = 0; i < memoryType4Array.length; i++) {

                if (memoryType4Array[i].ID == memoryInGameArray[0].ID) {

                  $('body').css('background-image', 'url('+ memory_color +')');
                  document.getElementById("game-question").innerHTML = memoryType4Array[i].Question;

                }
              }
            }
            //memarr_counter++;
          //}
        //}
        else {

          // EIRIK´S SUPER GHETTO LØSNING

          // set body color based on question type
          if (current_game_questions.entries[game_counter].Type == '1') {
            //document.getElementById("body").style.backgroundImage = truth_color;
            $('body').css('background-image', 'url('+ truth_color +')');
          } else if (current_game_questions.entries[game_counter].Type == '2') {
            //document.getElementById("body").style.backgroundImage = dare_color;
            $('body').css('background-image', 'url('+ dare_color +')');
          } else if (current_game_questions.entries[game_counter].Type == '5') {
            //document.getElementById("body").style.backgroundImage = multiplayer_color;
            $('body').css('background-image', 'url('+ multiplayer_color +')');
          } else if (current_game_questions.entries[game_counter].Type == '6') {
            //document.getElementById("body").style.backgroundImage = all_color;
            $('body').css('background-image', 'url('+ all_color +')');
          }

          document.getElementById("game-question").innerHTML = current_game_questions.entries[game_counter].Question;

        }
        } else {

        // set body color based on question type
        if (current_game_questions.entries[game_counter].Type == '1') {
          //document.getElementById("body").style.backgroundImage = truth_color;
          $('body').css('background-image', 'url('+ truth_color +')');
        } else if (current_game_questions.entries[game_counter].Type == '2') {
          //document.getElementById("body").style.backgroundImage = dare_color;
          $('body').css('background-image', 'url('+ dare_color +')');
        } else if (current_game_questions.entries[game_counter].Type == '5') {
          //document.getElementById("body").style.backgroundImage = multiplayer_color;
          $('body').css('background-image', 'url('+ multiplayer_color +')');
        } else if (current_game_questions.entries[game_counter].Type == '6') {
          //document.getElementById("body").style.backgroundImage = all_color;
          $('body').css('background-image', 'url('+ all_color +')');
        }

        document.getElementById("game-question").innerHTML = current_game_questions.entries[game_counter].Question;
        }
      }
    }
  }

  function returnToMenu(status) {
    window.location.replace("start.html");
    document.location = "start.html";
  }
  window.onload = function(e) {

    $('.modal').modal();
    //$('#modal1').modal('open');
    //$('#orientation-warning-modal').modal('open');
  }

  window.addEventListener('touchstart', function() {
    if (status = 1) {
      game();
    }
  });

  function preloadImages(array) {
      if (!preloadImages.list) {
          preloadImages.list = [];
      }
      var list = preloadImages.list;
      for (var i = 0; i < array.length; i++) {
          var img = new Image();
          img.onload = function() {
              var index = list.indexOf(this);
              if (index !== -1) {
                  // remove image from the array once it's loaded
                  // for memory consumption reasons
                  list.splice(index, 1);
              }
          }
          list.push(img);
          img.src = array[i];
      }
  }

  preloadImages(["assets/images/yellowBack.jpg",
  "assets/images/redBack.jpg",
  "assets/images/orangeBack.jpg",
  "assets/images/blueBack.jpg",
  "assets/images/greenBack.jpg",
  "assets/images/burgBack.jpg"]);
