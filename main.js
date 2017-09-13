
// GET COOKIE WITH PLAYER NAMES
var allPlayers // array with all players
var question_truth = [];
var question_dare = [];
var question_memory = [];
var question_linkedTo = [];
var question_multiplayer = [];
var question_all = [];

// JSON ARRAY CONTAING ID AND QUESTION
var allQuestions = {};
allQuestions.entries = new Array();

var current_game_questions = {};
current_game_questions.entries = new Array();

// DELETED QUESTIONS
var deleted_question_IDs = [];

// COUNTERS
var truth_in = 0;
var dare_in = 0;
var memory_in = 0;
var multiplayer_in = 0;
var all_in = 0;


function onpoop() {

  allPlayers = $.cookie("allPlayers");
  allPlayers = JSON.parse(allPlayers);
}
onpoop();

window.onload = function(e) {

  $('.modal').modal();
  $('#modal1').modal('open');
}

function getQuestions(question_truth, question_dare, question_memory, question_linkedTo, question_multiplayer, question_all, truth_in, dare_in, memory_in, multiplayer_in, all_in) {

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

											 newString = (obj[i].question).replace("PLAYER_NAME", playerNameThisCard);

                    	while(addedName==playerNameThisCard){
                       			playerIndexThisCard = Math.floor(Math.random()*tall);
                            playerNameThisCard = allPlayers[playerIndexThisCard];
                      }

                      obj[i].question = newString;
                      j++;
                      addedName=playerNameThisCard;

                      playerIndexThisCard = Math.floor(Math.random()*tall);
                    	playerNameThisCard = allPlayers[playerIndexThisCard];
                    }

											allQuestions.entries.push({
                       	"ID" : obj[i].linkedTo,
                        "Type" : "1",
                        "Question" : newString
                      });
                     //question_truth.push(newString);
                     //console.log(question_truth);
                     //console.log(allQuestions);
                  }

                    else if (obj[i].type === '2') {

                      j = 0;
                      addedName="koko";
                      playerIndexThisCard = Math.floor(Math.random()*tall);
                      playerNameThisCard = allPlayers[playerIndexThisCard];

                      while (j < 5) { // NOT MORE THAN 5 PLAYER_NAMES!!!!

                        addedName = playerNameThisCard;
                        newString = (obj[i].question).replace("PLAYER_NAME", playerNameThisCard);

                        while(addedName==playerNameThisCard){
                         			playerIndexThisCard = Math.floor(Math.random()*tall);
                              playerNameThisCard = allPlayers[playerIndexThisCard];
                        }

                        obj[i].question = newString;
                        j++;
                        addedName=playerNameThisCard;

                        playerIndexThisCard = Math.floor(Math.random()*tall);
                      	playerNameThisCard = allPlayers[playerIndexThisCard];
                      }
                        allQuestions.entries.push({
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

                    while (j < 5) { // NOT MORE THAN 5 PLAYER_NAMES!!!!

                      addedName = playerNameThisCard;

                      newString = (obj[i].question).replace("PLAYER_NAME", playerNameThisCard);

                      while(addedName==playerNameThisCard){
                       			playerIndexThisCard = Math.floor(Math.random()*tall);
                            playerNameThisCard = allPlayers[playerIndexThisCard];
                      }

                      obj[i].question = newString;
                      j++;
                      addedName=playerNameThisCard;

                      playerIndexThisCard = Math.floor(Math.random()*tall);
                    	playerNameThisCard = allPlayers[playerIndexThisCard];
                    }

                     //question_memory.push(newString);
                     allQuestions.entries.push({
                     	"ID" : obj[i].linkedTo,
                      "Type" : "3",
                      "Question" : newString
                     });

                    //console.log(allQuestions);
                    //console.log(question_memory);
                  }

                  else if (obj[i].type === '4') {
                    // LINKED TO
                    allQuestions.entries.push({
                     	"ID" : obj[i].linkedTo,
                      "Type" : "4",
                      "Question" : obj[i].question
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

                      addedName = playerNameThisCard;

                      newString = (obj[i].question).replace("PLAYER_NAME", playerNameThisCard);
                      addedName = playerNameThisCard;


                      while(addedName==playerNameThisCard) {

                       			playerIndexThisCard = Math.floor(Math.random()*tall);
                            playerNameThisCard = allPlayers[playerIndexThisCard];
                      }

                      obj[i].question = newString;
                      j++;
                      addedName=playerNameThisCard;

                      playerIndexThisCard = Math.floor(Math.random()*tall);
                    	playerNameThisCard = allPlayers[playerIndexThisCard];
                    }

                    	allQuestions.entries.push({
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
                     	"ID" : obj[i].linkedTo,
                      "Type" : "6",
                      "Question" : obj[i].question
                     });
                    //question_all.push(obj[i].question);
                    //console.log(question_all);
                  }

                }
                //console.log(allQuestions.entries);
                createGame(question_truth, question_dare, question_memory, question_linkedTo, question_multiplayer, question_all, truth_in, dare_in, memory_in, multiplayer_in, all_in);
            }
        };
        xmlhttp.open("GET", "http://192.81.223.225/api/index.php", true);
        xmlhttp.send();

}
  getQuestions(question_truth, question_dare, question_memory, question_linkedTo, question_multiplayer, question_all, truth_in, dare_in, memory_in, multiplayer_in, all_in);

  function createGame(question_truth, question_dare, question_memory, question_linkedTo, question_multiplayer, question_all, truth_in, dare_in, memory_in, multiplayer_in, all_in) {

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
    var qDare_count = Math.floor((game_length/100) * 30); // 30 %
    var qMemory_count = Math.floor((game_length/100) * 10); // 10 %
    var qMultiplayer_count = Math.floor((game_length/100) * 15); // 15 %
    var qAll_count = Math.floor((game_length/100) * 15); // 15 %

    for (var i = 0; i < allQuestions.entries.length; i++) {

      randomNumber = randomizeNumber(start, end);

      if (allQuestions.entries[randomNumber].Type == '1') {

        if (qTruth_count >= 0) { // push to array

          current_game_questions.entries.push({
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "1",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qTruth_count--;
        }

      } else if (allQuestions.entries[randomNumber].Type == '2') {

        if (qDare_count >= 0) { // push to array

          current_game_questions.entries.push({
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "2",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qDare_count--;
        }

      } else if (allQuestions.entries[randomNumber].Type == '3') {

        if (qMemory_count >= 0) { // push to array

          current_game_questions.entries.push({
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "3",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qMemory_count--;
        }


      } else if (allQuestions.entries[randomNumber].Type == '5') {

        if (qMultiplayer_count >= 0) { // push to array

          current_game_questions.entries.push({
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "5",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qMultiplayer_count--;
        }


      } else if (allQuestions.entries[randomNumber].Type == '6') {

        if (qAll_count >= 0) { // push to array

          current_game_questions.entries.push({
            "ID" : allQuestions.entries[randomNumber].ID,
            "Type" : "6",
            "Question" : allQuestions.entries[randomNumber].Question
          });

          qAll_count--;
        }
      }
    }
    console.log(current_game_questions);

  }

  function randomizeNumber(start, end) {

    var number = Math.floor(Math.random() * end) + start;

    return number;

  }
