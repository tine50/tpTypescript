import { Point } from "./Point";
import { TroisPoints } from "./TroisPoints";

let point1 = new Point(2,1);
let point2 = new Point(2,3);
let point3 = new Point(4,1);
let test1 : TroisPoints = new TroisPoints(point1 ,point2,point3);
console.log(test1.TesterAlignement());
console.log(test1.estIsocele());
console.log(test1.premier);
