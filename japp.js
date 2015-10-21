$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$score = document.getElementById("score");
$autoclick = document.getElementById("autoclick");
score = 1;
nbMultiplicateur = 1;
function afficherScore() {
    $score.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
    $multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain verre de lait : " + prix() + ")";
}

function afficherPrixAutoclick(){
    $autoclick.innerHTML = "acheter un autoclick au prix de " + acprix() + " cookies l'autoclic dure 10 secondes";
}
function clic() {
    score = score + nbMultiplicateur;
    afficherScore();
}

function prix() {
    return 20 * nbMultiplicateur * nbMultiplicateur;
}
function acprix(){
    return 200;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Vous n avez pas asser de cookies !");
    }
}
function acheterAutoclick() {
    if (score >= acprix()) {
        score = score - acprix();
        autoclicker();
        stopintervall();

    } else {
        alert("Vous n avez pas asser de cookies !");
    }
};
function autoclicker(){
     $stop = setInterval($bouton.onclick,1000);
 
}
function stopintervall(){
    setTimeout(stopint,10000);
}
function stopint(){
    clearInterval($stop);
 }

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclick.onclick = acheterAutoclick;
afficherScore();
afficherNbMultiplicateur();
afficherPrixAutoclick();