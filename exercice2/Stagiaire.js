"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
var Stagiaire = /** @class */ (function () {
    function Stagiaire(nom, note) {
        this.somme = 0;
        this.ind1 = 0;
        this.ind2 = 0;
        this._nom = nom;
        this._notes = note;
    }
    Object.defineProperty(Stagiaire.prototype, "__nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stagiaire.prototype, "__notes", {
        get: function () {
            return this._notes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stagiaire.prototype, "nom", {
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stagiaire.prototype, "notes", {
        set: function (note) {
            this._notes = note;
        },
        enumerable: false,
        configurable: true
    });
    Stagiaire.prototype.calculerMoyenne = function () {
        for (var i = 0; i < this._notes.length; i++) {
            this.somme = this.somme + this._notes[i];
        }
        return this.somme / this._notes.length;
    };
    Stagiaire.prototype.trouverMax = function () {
        for (var j = 0; j < this._notes.length; j++) {
            if (this._notes[this.ind1] < this._notes[j]) {
                this.ind1 = j;
            }
        }
        return this._notes[this.ind1];
    };
    Stagiaire.prototype.trouverMin = function () {
        for (var j = 0; j < this._notes.length; j++) {
            if (this._notes[this.ind2] > this._notes[j]) {
                this.ind2 = j;
            }
        }
        return this._notes[this.ind2];
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
