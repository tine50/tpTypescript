import { Point } from "./Point";

export class TroisPoints{
    private _premier : Point = new Point(2,1);
    private _deuxieme : Point = new Point(2,3);
    private _troisieme : Point = new Point(4,1);
    public AB : number;
    public AC : number;
    public BC : number;

    public constructor(premier : Point, deuxieme : Point, troisieme : Point)
    {
        this._premier = premier;
        this._deuxieme = deuxieme;
        this._troisieme = troisieme;
    }

    public  TesterAlignement()
    {
        this.AB = this._premier.calculerDistance(this._deuxieme);
        this.AC = this._premier.calculerDistance(this._troisieme);
        this.BC = this._deuxieme.calculerDistance(this._troisieme);

        if((this.AB === this.AC + this.BC) || (this.AC === this.AB + this.BC) || (this.BC === this.AC + this.AB))
        {
            return true;
        }else{
            return false;
        }
    }

    public estIsocele()
    {
        this.AB = this._premier.calculerDistance(this._deuxieme);
        this.AC = this._premier.calculerDistance(this._troisieme);
        this.BC = this._deuxieme.calculerDistance(this._troisieme);

        if((this.AB === this.AC) || (this.AB === this.BC) || (this.BC === this.AC))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public get premier()
    {
        return this._premier;
    }

    public get deuxieme()
    {
        return this._deuxieme;
    }

    public get troisieme()
    {
        return this._troisieme;
    }

    public set premier(premier : Point)
    {
        this._premier = premier;
    }

    public set deuxieme(deuxieme : Point)
    {
        this._deuxieme = deuxieme;
    }

    public set troisieme(troisieme : Point)
    {
        this._troisieme = troisieme;
    }
}



