'use strict'

const tariffa_base = 0.21;
const km_viaggio_stringa = prompt('iserire la distanza del viaggio in Km');
const etá_passeggero_stringa = prompt("iserire l'etá del passeggero");
const km_viaggio = parseInt(km_viaggio_stringa);
const etá_passeggero = parseInt(etá_passeggero_stringa);

if (!(isNaN(km_viaggio)) && !(isNaN(km_viaggio))) {
    
} else{
    console.error("L'etá inserita o la distanza del viaggio non sono corrette.");
    
}

