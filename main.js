let nomeUtente = prompt("nome utente?");
document.getElementById("nome").innerText = (nomeUtente);

let cognomeUtente = prompt("cognome utente?");
document.getElementById("cognome").innerText = (cognomeUtente);

let colorePreferito = prompt("colore preferito?");
document.getElementById("colore").innerText = (colorePreferito);

let annoCorrente = 2023

let generatorePasword = (`${nomeUtente}-${cognomeUtente}-${colorePreferito}-${annoCorrente}`);
document.getElementById("pasword").innerText = (generatorePasword);

