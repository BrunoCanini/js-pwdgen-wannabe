alert("Benvenuto");

const nomeUtente = prompt("nome utente?");
document.getElementById("nome").innerText = (nomeUtente);

const cognomeUtente = prompt("cognome utente?");
document.getElementById("cognome").innerText = (cognomeUtente);

const colorePreferito = prompt("colore preferito?");
document.getElementById("colore").innerText = (colorePreferito);

// const annoCorrente = 2023

const annoCorrente = new Date().getFullYear();

const generatorePasword = (`${nomeUtente}-${cognomeUtente}-${colorePreferito}-${annoCorrente}`);
document.getElementById("pasword").innerText = (generatorePasword);

alert("Operazione Completata");

console.log("La nuova password è: ", generatorePasword)