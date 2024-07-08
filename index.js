var timer = 60;
var score = 0;
var hit_rn = 0;

function random_number() {

    var clutter = "";

    for (var i = 1; i <= 168; i++) {

        var random = Math.floor(Math.random() * 10);

        clutter += `  <div id="bubble">${random}</div>`;


    }

    document.querySelector("#panel_bottom").innerHTML = clutter;

}


function timmer_generate() {
    var timer_INT = setInterval(function () {

        if (timer > 0) {


            timer--;

            document.querySelector("#timer").innerHTML = timer;

        }

        else {

            clearInterval(timer_INT);
            document.querySelector("#panel_bottom").innerHTML = ` <h1 id = "king" > YOUR SCORE IS   ${score} 😱   </h1>  `;
            // document.querySelector("#panel_bottom").innerHTML = `<h1>GAME OVER 🥲 ` ;
            // document.querySelector("#panel_bottom").innerHTML += ` <button  id = "btn" > PLAY AGAIN </button> ` ;

            // document.querySelector("#btn").addEventListener("click" , function() {

            // timmer_generate() ;

            // random_number();
            // hit_random() ; 
            // score_pluse() ;
            // } )




            // document.querySelector("#panel_bottom").innerHTML += `<h1 id = "king" > Created By Kartik Kumar 👑  </h1>  ` ;

        }

    }, 1000);
}


function hit_random() {

    hit_rn = Math.floor(Math.random() * 10);

    document.querySelector("#hit").textContent = hit_rn;



}




function score_pluse() {

    score += 10;

    document.querySelector("#score").innerHTML = score;

}


document.querySelector("#panel_bottom").addEventListener("click", function (detail) {

    // console.log( Number( detail.target.textContent));
    var target = Number(detail.target.textContent);

    if (target === hit_rn) {
        score_pluse();
        random_number();
        hit_random();

    }









})






random_number();
timmer_generate();
hit_random();
