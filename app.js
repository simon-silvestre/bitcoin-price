const url = 'https://www.blockchain.com/ticker';

function bitcoin() {

    //crée une requete
    let request = new XMLHttpRequest(); //crée un objet
    request.open('GET', url); //premier parametre GET / POST || deuxieme parametre : URL
    request.responseType = 'json'; //on attend du JSON
    request.send(); //on envoi la requête

    //des qu'on recoit une reponse, la fonction est executée
    request.onload = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let response = request.response; //on stock la reponse
                let prix = response.EUR.last;
                document.getElementById('price_label').textContent = prix;
            } else {
                alert('Un probleme est intervenue, veuillez revenir plus tard, merci !')
            }
        }
    }

}

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    bitcoin();
    console.log('actu');
});

window.onload = bitcoin();
