import { Formation } from "./Formation";
import { Stagiaire } from "./Stagiaire";


let sta1 = new Stagiaire('Abdou', [20,18,13]);
let sta2 = new Stagiaire('Demba', [0,0,0]);
let sta3 = new Stagiaire('Thierno', [10,17,12]);

let formation1 = new Formation('Back-End', 12, [sta1, sta2, sta3]);

console.log("Moyenne formation "+formation1.calculerMoyenneFormation());
console.log("Meilleure moyenne "+formation1.getIndexMax());
console.log("Meilleure moyenne "+formation1.afficherNomMax());
console.log("Note minimale "+formation1.afficherMinMax());
console.log("Moyenne par nom "+ formation1.trouverMoyenneParNom('Thierno'));