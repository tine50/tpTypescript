"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
var Formation = /** @class */ (function () {
    function Formation(intitule, nbrJours, stagiaires) {
        this.sum = 0;
        this.ind = 0;
        this.meil = 0;
        this.min = 0;
        this.byName = 0;
        this._intitule = intitule;
        this._nbrJours = nbrJours;
        this._stagiaires = stagiaires;
    }
    Formation.prototype.calculerMoyenneFormation = function () {
        for (var i = 0; i < this._stagiaires.length; i++) {
            this.sum = this.sum + this._stagiaires[i].calculerMoyenne();
        }
        return this.sum / this._stagiaires.length;
    };
    Formation.prototype.getIndexMax = function () {
        for (var i = 0; i < this._stagiaires.length; i++) {
            if (this._stagiaires[this.ind].calculerMoyenne() < this._stagiaires[i].calculerMoyenne()) {
                this.ind = i;
            }
        }
        return this.ind;
    };
    Formation.prototype.afficherNomMax = function () {
        for (var i = 0; i < this._stagiaires.length; i++) {
            if (this._stagiaires[i].calculerMoyenne() > this._stagiaires[this.meil].calculerMoyenne()) {
                this.meil = i;
            }
        }
        return this._stagiaires[this.meil].__nom;
    };
    Formation.prototype.afficherMinMax = function () {
        for (var i = 0; i < this._stagiaires.length; i++) {
            if (this._stagiaires[i].calculerMoyenne() < this._stagiaires[this.min].calculerMoyenne()) {
                this.min = i;
            }
        }
        return this._stagiaires[this.min].__nom;
    };
    Formation.prototype.trouverMoyenneParNom = function (nom) {
        for (var i = 0; i < this._stagiaires.length; i++) {
            if (this._stagiaires[i].__nom === nom) {
                this.byName = i;
            }
        }
        return this._stagiaires[this.byName].calculerMoyenne();
    };
    Object.defineProperty(Formation.prototype, "stagiaire", {
        get: function () {
            for (var i = 0; i < this._stagiaires.length; i++) {
                return this._stagiaires[i];
            }
        },
        enumerable: false,
        configurable: true
    });
    return Formation;
}());
exports.Formation = Formation;
