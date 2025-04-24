let nbr1 = document.querySelector('.operande1');
let nbr2 = document.querySelector('.operande2');
let operateur = document.querySelector('.operateur');
let message = document.querySelector('.Message');
let score = document.querySelector('.score');
let lien = document.querySelector('.link');
let section = document.querySelector('section');
var cpt = 0;
let cpt2 =0;

//Nombre aleatoire debut du jeu
random1 = Math.random() * 11 << 0; //generer nombre aleatoire compris entre 0 et 11
random2 = Math.random() * 11 << 0; //generer nombre aleatoire compris entre 0 et 11
console.log(random1);
console.log(random2);
//operateur aleatoire
const operateurs = ["+", "-", "*", "/"];
const indexAleatoire = Math.floor(Math.random() * operateurs.length);
const operateurAleatoire = operateurs[indexAleatoire];


//inserer les valeurs generée dans les variables
nbr1.innerHTML= random1;
nbr2.innerHTML= random2;
operateur.innerHTML=operateurAleatoire;
cpt= cpt + 1;
 //fonction de verification
 function verifier() {
    //recuperer le resultat entré par le joueur
    var resultatJoueur = document.querySelector('.res').value;
    // alert(resultatJoueur);
    if ((random1+random2==resultatJoueur)||
    (random1*random2==resultatJoueur)||
    (random1/random2==resultatJoueur)||
    (random1-random2==resultatJoueur)
    ) {
        message.style.background="green";
        message.innerHTML="correcte";
        resultatJoueur.value='';//modifier
                // section.innerHTML="";
                //Nombre aleatoire debut du jeu
                random1 = Math.random() * 11 << 0; //generer nombre aleatoire compris entre 0 et 11
                random2 = Math.random() * 11 << 0; //generer nombre aleatoire compris entre 0 et 11
                console.log(random1);
                console.log(random2);
                //operateur aleatoire
                const operateurs = ["+", "-", "*", "/"];
                const indexAleatoire = Math.floor(Math.random() * operateurs.length);
                const operateurAleatoire = operateurs[indexAleatoire];


                //inserer les valeurs generée dans les variables
                nbr1.innerHTML= random1;
                nbr2.innerHTML= random2;
                operateur.innerHTML=operateurAleatoire;
                cpt = cpt + 1;
    } else {
        message.style.background="red";
        message.innerHTML="mauvaise reponse!";
        section.innerHTML="";
        score.innerHTML=`<span>${cpt}</span><br>Score`
        lien.style.display = "block"
        
    }
 }

