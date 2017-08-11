$(document).ready(function () {
  $.getJSON("js/rondo.json", function (rondo) {
    var rondoMixed = shuffle(rondo);
    var index = 0;
    var teamA = 0;
    var teamB = 0;

    var showNext = function (index) {
      if (index >= rondoMixed.length) {
        $("#question").html("Das Spiel ist zuende!");
        $("#answer-button-container").hide();
        $("#answer-container").hide();

        return true;
      }
      $("#question").html(rondoMixed[index].text);
      $("#answer").html(rondoMixed[index].solution);
      $("#round").html("#" + (index + 1));
    }

    var updateGameresult = function (index) {
      $("#team-a-result").html(teamA);
      $("#team-b-result").html(teamB);
    }

    var toggleDisplay = function () {
      $("#answer-container").toggleClass("hidden");
      $("#answer-button-container").toggleClass("hidden");
    }

    $("#team-a").click(function () {
      teamA++;
      updateGameresult();
      toggleDisplay();
      showNext(++index);
    });
    $("#team-b").click(function () {
      teamB++;
      updateGameresult();
      toggleDisplay();
      showNext(++index);
    });
    $("#answer-btn").click(function () {
      toggleDisplay();
    });


    showNext(index);
  });
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
