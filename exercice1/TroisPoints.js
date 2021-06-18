"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroisPoints = void 0;
var Point_1 = require("./Point");
var TroisPoints = /** @class */ (function () {
    function TroisPoints(premier, deuxieme, troisieme) {
        this._premier = new Point_1.Point(2, 1);
        this._deuxieme = new Point_1.Point(2, 3);
        this._troisieme = new Point_1.Point(4, 1);
        this._premier = premier;
        this._deuxieme = deuxieme;
        this._troisieme = troisieme;
    }
    TroisPoints.prototype.TesterAlignement = function () {
        this.AB = this._premier.calculerDistance(this._deuxieme);
        this.AC = this._premier.calculerDistance(this._troisieme);
        this.BC = this._deuxieme.calculerDistance(this._troisieme);
        if ((this.AB === this.AC + this.BC) || (this.AC === this.AB + this.BC) || (this.BC === this.AC + this.AB)) {
            return true;
        }
        else {
            return false;
        }
    };
    TroisPoints.prototype.estIsocele = function () {
        this.AB = this._premier.calculerDistance(this._deuxieme);
        this.AC = this._premier.calculerDistance(this._troisieme);
        this.BC = this._deuxieme.calculerDistance(this._troisieme);
        if ((this.AB === this.AC) || (this.AB === this.BC) || (this.BC === this.AC)) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(TroisPoints.prototype, "premier", {
        get: function () {
            return this._premier;
        },
        set: function (premier) {
            this._premier = premier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "deuxieme", {
        get: function () {
            return this._deuxieme;
        },
        set: function (deuxieme) {
            this._deuxieme = deuxieme;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "troisieme", {
        get: function () {
            return this._troisieme;
        },
        set: function (troisieme) {
            this._troisieme = troisieme;
        },
        enumerable: false,
        configurable: true
    });
    return TroisPoints;
}());
exports.TroisPoints = TroisPoints;
