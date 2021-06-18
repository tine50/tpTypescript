"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    Object.defineProperty(Point.prototype, "ab", {
        get: function () {
            return this.abs;
        },
        set: function (el) {
            this.abs = el;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "ords", {
        get: function () {
            return this.ord;
        },
        set: function (el) {
            this.ord = el;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.calculerDistance = function (p) {
        return Math.sqrt(Math.pow(this.abs - this.ord, 2) + Math.pow(p.ab + p.ords, 2));
    };
    Point.prototype.calculerMilieu = function (p) {
        p.ab = (this.abs + this.ord) / 2;
        p.ord = (p.ab + p.ord) / 2;
        return p;
    };
    return Point;
}());
exports.Point = Point;
