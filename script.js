'use strict'

const tariffa_base = 0.21;
const km_viaggio_stringa = prompt('iserire la distanza del viaggio in Km');
const etá_passeggero_stringa = prompt("iserire l'etá del passeggero");
const km_viaggio = parseFloat(km_viaggio_stringa);
const etá_passeggero = parseInt(etá_passeggero_stringa);
const prezzo_biglietto_bambino = 0;
const sconto_adolescenti = 0.2;
const sconto_over_65 = 0.4;


if ((!(isNaN(etá_passeggero)) && !(isNaN(km_viaggio))) && etá_passeggero > 0) {
    if (etá_passeggero <= 4) {
        console.log(`Il prezzo del suo biglietto é ${prezzo_biglietto_bambino}€, i bambini sotto i 4 anni non pagano.`);

    } else if (km_viaggio < 1) {
        console.error('La distanza del viaggio fornita é troppo breve.');
    } else if (etá_passeggero < 18) {
        const prezzo_biglietto_adolescente = (km_viaggio * tariffa_base) - ((km_viaggio * tariffa_base) * sconto_adolescenti);
        const prezzo_adolescente_arrotondato = prezzo_biglietto_adolescente.toFixed(2);
        console.log(`Il prezzo del suo biglietto é ${prezzo_adolescente_arrotondato}€, gli adolescenti ricevono uno sconto del 20%.`);
    } else if (etá_passeggero >= 65) {
        const prezzo_biglietto_over_65 = (km_viaggio * tariffa_base) - ((km_viaggio * tariffa_base) * sconto_over_65);
        const prezzo_over_65_arrotondato = prezzo_biglietto_over_65.toFixed(2);
        console.log(`Il prezzo del suo biglietto é ${prezzo_over_65_arrotondato}€, gli over 65 ricevono uno sconto del 40%.`);
    } else {
        const prezzo_biglietto_base = km_viaggio * tariffa_base;
        const prezzo_base_arrotondato = parseFloat(prezzo_biglietto_base.toFixed(2))
        console.log(`Il prezzo del suo biglietto é ${prezzo_base_arrotondato}€.`);
    }

} else {
    console.error("L'etá inserita o la distanza del viaggio non sono corrette.");
}


