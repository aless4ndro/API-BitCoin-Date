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


    let date = new Date().toISOString().slice(0, 10); 
    let copyright = `<br/> ${date}<br/> AUTOMATIC UPDATE`;
    document.getElementById('data').innerHTML = copyright;



