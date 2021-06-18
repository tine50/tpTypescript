export class Point{
    public constructor(private abs: number,
        private ord: number){

        }

    public get ab() : number
    {
        return this.abs;
    }

    public get ords() : number
    {
        return this.ord;
    }

    public set ab(el : number)
    {
        this.abs = el;
    }

    public set ords(el : number)
    {
        this.ord = el;
    }

    public calculerDistance(p: Point)
    {
        return Math.sqrt(Math.pow(this.abs - this.ord, 2) + Math.pow(p.ab + p.ords, 2));
    }

    public calculerMilieu(p: Point)
    {
        p.ab = (this.abs + this.ord) / 2;
        p.ord = (p.ab + p.ord) / 2;

        return p;
    }
}