$(document).ready(function () {
    var headsCount = 0;
    var tailsCount = 0;
    var wins = 0;
    var losses = 0;
    var count = 1;
    var spin = 360;
    var audio = $("#mysoundclip")[0];
    function flipThatCoin(result) {

        var randomNumber = Math.floor(Math.random() * 2);
        flipCoin(randomNumber);
        function flipCoin(result) {
            if (result == 0) {
                if (spin % 360 == 0) {
                    spin += 1080;
                } else {
                    spin -= 900;
                }
            } else {
                if (spin % 360 == 0) {
                    spin += 900;
                } else {
                    spin -= 1080;
                }
            }
            let rotations = `${spin}deg`;
            $('.flip-coin-inner').css('transform', `rotateY(${rotations})`).css('transform-origin', '50% 50%');
        }

        if (result == randomNumber) {
            wins += 1;
            $('#win-lose').html('<h2>Winner!</h2>').css("color", "darkgreen");
            $('#wins').text(wins);
        } else {
            losses += 1;
            $('#win-lose').html('<h2>Loser!</h2>').css("color", "red");
            $('#losses').text(losses);
        }
    }

    $("#heads").on("click", function () {
        headsCount++;
        $("#heads-chosen").text(headsCount);
        $("#guess").html("<b>Heads</b>");
        flipThatCoin(0);
    });

    $("#tails").on("click", function () {
        tailsCount++;
        $("#tails-chosen").text(headsCount);
        $("#guess").html("<b>Tails</b>");
        flipThatCoin(1);
    });
});