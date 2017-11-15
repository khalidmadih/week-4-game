$(document).ready(function() {

    // Setting up my variables
    var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
    var wins = 0;
    var losses = 0;
    var randomComputerNumber;
    var userTotalScore;


    // Initialize the game
    function initializeVariables() {
        randomComputerNumber = 19 + Math.floor(Math.random() * 102);
        gemOneValue = 1 + Math.floor(Math.random() * 12);
        gemTwoValue = 1 + Math.floor(Math.random() * 12);
        gemThreeValue = 1 + Math.floor(Math.random() * 12);
        gemFourValue = 1 + Math.floor(Math.random() * 12);
        userTotalScore = 0;
        // Re-intilizing the game scores
        $("#winsTotal").html("Wins: " + wins);
        $("#lossesTotal").html("Losses: " + losses);
        $("#randomNumber").html(randomComputerNumber);
        $("#userScore").html(userTotalScore);
        consoleLogVariables();
    }

    // Checking if the user has won or lost
    function hasUserWonOrLost() {

        if (userTotalScore > randomComputerNumber) {
            losses++;
            console.log("user lost");
            alert("Sorry, you lost :( ....Try again!");

            initializeVariables();
        }


        if (userTotalScore == randomComputerNumber) {
            wins++;
            console.log("user won")
            alert("Congratulations! you won!!");
            initializeVariables();
        }
    }

    // some more console logs for debugging
    function consoleLogVariables() {
        console.log("wins: " + wins + " losses: " + losses);
        console.log("gemOneValue: ", gemOneValue + " gemTwoValue: " + gemTwoValue + " gemThreeValue: " + gemThreeValue + " gemFourValue: " + gemFourValue);
        console.log("randomComputerNumber: " + randomComputerNumber + " userTotalScore: " + userTotalScore);
        console.log("----------------------------------");

    }

    // Caling the function to start the game
    initializeVariables();

    // Event listener for when gems clicked
    $(".gem").on("click", function() {
        var pressed = $(this).attr("value");
        console.log(pressed);
        // adding the value of the gem to the user's ongoing score total using a switch statement
        switch (pressed) {
            case "gem1":
                userTotalScore += gemOneValue;
                break;
            case "gem2":
                userTotalScore += gemTwoValue;
                break;
            case "gem3":
                userTotalScore += gemThreeValue;
                break;
            case "gem4":
                userTotalScore += gemFourValue;
                break;
        }

        $("#userScore").html(userTotalScore);
        consoleLogVariables();
        // calling the function to see if user has won or lost
        hasUserWonOrLost();
    });

});