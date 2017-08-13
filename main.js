
// GET COOKIE WITH PLAYER NAMES
var allPlayers // array with all players
var question_truth = [];
var question_dare = [];
var question_memory = [];
var question_linkedTo = [];
var question_multiplayer = [];
var question_all = [];

var current_game_questions = [];

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

                for (var i = 0; i < obj.length; i++) {

                  var playerIndexThisCard = Math.floor(Math.random()*tall);
                  var playerNameThisCard = allPlayers[playerIndexThisCard];

                  if (obj[i].type === '1') {
                    // TRUTH
                    if (obj[i].question.indexOf("PLAYER_NAME") > 0) {

                      var newString = (obj[i].question).replace(/PLAYER_NAME/gi, 'TEST');
                      alert(newString);
                      question_truth.push(newString);
                    }
                    //str.replace(/xmas/i, 'Christmas');

                    //console.log(question_truth);
                  }
                    else if (obj[i].type === '2') {
                      // DARE
                      question_dare.push(obj[i].question);
                      //console.log(question_dare);
                    }

                  else if (obj[i].type === '3') {
                    // MEMORY
                    question_memory.push(obj[i].question);
                    //console.log(question_memory);
                  }
                  else if (obj[i].type === '4') {
                    // LINKED TO
                    question_linkedTo.push(obj[i].question);
                    //console.log(question_linkedTo);
                  }
                  else if (obj[i].type === '5') {
                    // MULTIPLAYER
                    question_multiplayer.push(obj[i].question);
                    //console.log(question_multiplayer);
                  }
                  else if (obj[i].type === '6') {
                    // ALL
                    question_all.push(obj[i].question);
                    //console.log(question_all);
                  }
                }
                createGame(question_truth, question_dare, question_memory, question_linkedTo, question_multiplayer, question_all, truth_in, dare_in, memory_in, multiplayer_in, all_in);
            }
        };
        xmlhttp.open("GET", "http://192.81.223.225/api/index.php", true);
        xmlhttp.send();

}
getQuestions(question_truth, question_dare, question_memory, question_linkedTo, question_multiplayer, question_all, truth_in, dare_in, memory_in, multiplayer_in, all_in);

  function createGame(question_truth, question_dare, question_memory, question_linkedTo, question_multiplayer, question_all, truth_in, dare_in, memory_in, multiplayer_in, all_in) {

    var players = allPlayers;
    var game_length = (players.length)*5;
    //console.log(question_dare);

    // ALGORITHM CALC NUMBERS
    var truth_and_dare_count = (Math.round((game_length*2)/3));
    var rest_of_questions = (game_length)-(truth_and_dare_count);

    //SELECT QUESTIONS
    var one_game_truth_and_dare_questions = [];
    var one_game_rest_questions = [];

    for (var i = 0; i < truth_and_dare_count; i++) {

        if (i % 2 == 0) {
          //alert(question_truth[0]);
          one_game_truth_and_dare_questions.push(question_truth[truth_in]);
          current_game_questions.push(question_truth[truth_in]);
          truth_in++;
      } else {
          one_game_truth_and_dare_questions.push(question_dare[dare_in]);
          current_game_questions.push(question_dare[dare_in]);
          dare_in++;
      }
    }

    for (var i = 0; i < rest_of_questions; i++) {

      if (i % 2 == 0) {
        //alert(question_truth[0]);
          one_game_rest_questions.push(question_multiplayer[multiplayer_in]);
          current_game_questions.push(question_multiplayer[multiplayer_in]);
          multiplayer_in++;
      } else if (i % 3 == 0) {
          one_game_rest_questions.push(question_all[all_in]);
          current_game_questions.push(question_all[all_in]);
          all_in++;
      } else {
        one_game_rest_questions.push(question_memory[memory_in]);
        current_game_questions.push(question_memory[memory_in]);
        memory_in++;
      }

    }
    console.log(current_game_questions);

  }
