"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Formation_1 = require("./Formation");
var Stagiaire_1 = require("./Stagiaire");
var sta1 = new Stagiaire_1.Stagiaire('Abdou', [20, 18, 13]);
var sta2 = new Stagiaire_1.Stagiaire('Demba', [0, 0, 0]);
var sta3 = new Stagiaire_1.Stagiaire('Thierno', [10, 17, 12]);
var formation1 = new Formation_1.Formation('Back-End', 12, [sta1, sta2, sta3]);
console.log("Moyenne formation " + formation1.calculerMoyenneFormation());
console.log("Meilleure moyenne " + formation1.getIndexMax());
console.log("Meilleure moyenne " + formation1.afficherNomMax());
console.log("Note minimale " + formation1.afficherMinMax());
console.log("Moyenne par nom " + formation1.trouverMoyenneParNom('Thierno'));
