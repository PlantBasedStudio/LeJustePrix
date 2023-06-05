// Jeu du juste prix


//! ---- VARIABLES ---- 
const priceToFind = Math.floor(Math.random() * 100) + 1; // compris entre 1 et 100
const maxTry = 7;
let tryNumber = 0;
let	proposedPrice
const essai = document.querySelector(".essai"); 
const btnValide = document.querySelector(".btnValide");
let	result = document.querySelector(".result");
let reponse = document.querySelector(".indice");
let btnRecommencer = document.querySelector(".btnRetry");
let isWin = false; 
let newGame = false;

console.log(priceToFind);


//! ---- EVENT LISTENERS ---- 
essai.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        proposedPrice = Number(essai.value);
        test(proposedPrice);
        console.log(proposedPrice); // test
    }
});

btnValide.addEventListener("click", (event) => {
    proposedPrice = Number(essai.value);
    test(proposedPrice);
    console.log(proposedPrice); // test
});

btnRecommencer.addEventListener("click", (event) => {
    if (newGame === true) {
        window.location.reload();
    }
});

//! ---- HIDE DISPLAY ----
btnRecommencer.style.display = "none";

//! ---- FUNCTIONS ---- 
function win() {
    btnRecommencer.style.display = "block"; //! show diplay
    newGame = true;
}


function test(valueEntered){
    if (tryNumber <= maxTry && isWin === false) {
        tryNumber++;
        if (proposedPrice > priceToFind) {
            reponse.textContent = "prix trop élevé";
            
        } else if (proposedPrice < priceToFind) {
		
            reponse.textContent = "prix trop bas";
        } else if (parseInt(proposedPrice) === parseInt(priceToFind)) {
            reponse.textContent = "Vous avez trouvé le juste prix, bravo!";
            win();
        } else{
            reponse.textContent = "prix invalide, veuillez vérifier le format";
        }
        result.textContent = `Il vous reste ${parseInt(maxTry - tryNumber)} essais`
        essai.value = "";
    }
    if (tryNumber === maxTry) {
        reponse.textContent = "Vous avez perdu car vous avez utiliser tout vos essais";
        btnRecommencer.style.display = "block";
        newGame = true;
    }

}
