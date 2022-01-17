/*
const url = 'https://blockchain.info/ticker';

function recuperePrix() {
//Create a requete
let requete  = new XMLHttpRequest(); //create an object
requete.open('GET' , url); //first parametre GET / POST, dexiemme parametre : url

requete.responseType = 'json'; // we are waiting of Json
requete.send(); //we are sending our request

//From what we receive this fuction is execute
requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status     === 200) {
        let reponse   = requete.response; //we stock the reponse
        let prixEuros = reponse.EUR.last;
        document.querySelector('#price_label').textContent = prixEuros;
    }
    else {
        alert('Un probléme est Intervenue, merci de revenir plus tard. ');
    }
   }
  }
  console.log('Prix actualisé');
}
let interval = setInterval(recuperePrix, 1000);

*/

//Methode fetch----------------------

const url = 'https://blockchain.info/ticker';

async function recuperePrix() {
const requete = await fetch(url, {
    method: 'GET'
});
if(!requete.ok) {
    alert('Un erreur est survenue.');
}else {
    let donnees = await requete.json();
    //console.log(donnees);
    document.querySelector('span').textContent = donnees.EUR.last;
}
}

setInterval(recuperePrix, 1000);
let date = new Date().toISOString().slice(0, 10); 
    let copyright = `<br/> ${date}<br/> AUTOMATIC UPDATE`;
    document.getElementById('data').innerHTML = copyright;
//-------------------------------------


/*const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();

// Get
//requete.open('GET', url);
//requete.responseType = 'json';
//requete.send();

//Post
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType = 'json';
requete.send('prenom=John');

requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            console.log(reponse);
        } else {
            alert('Un probleme est intervenu');
        }
    }
}






//created API

/*<?php
header('Access-Control-Allow-Origin: *');

$prenom   = (isset($_POST['prenom'])) ? $_POST['prenom'] : 'anonyme';
$resultat = 'Bonjour ' . $prenom . ' ! Here is the AJAX request !';
$tableau  = ['prenom' => $prenom, 'resultat' => $resultat];
echo json_encode($tableau);*/







