/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  if (typeof phrase === 'string') {
    const voyelles = 'aeiouyAEIOUY';
    let count = 0;
    for (let char of phrase) {
      if (voyelles.includes(char)) {
        count = count + 1;
      }
    }
    return count;
  }
  return 0;
}

console.log(nombreDeVoyelles("Bonjour le monde"));

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
