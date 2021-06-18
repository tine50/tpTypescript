import { Stagiaire } from "./Stagiaire";

export class Formation
{
    private _nbrJours : number;
    private _intitule : string;
    private _stagiaires : Stagiaire[];
    private sum : number = 0;
    private ind : number = 0;
    private meil : number = 0;
    private min : number = 0;
    private byName : number = 0;

    public constructor (intitule : string, nbrJours : number, stagiaires : Stagiaire[])
    {
        this._intitule = intitule;
        this._nbrJours = nbrJours;
        this._stagiaires = stagiaires;
    }

    public calculerMoyenneFormation()
    {
        for(var i = 0; i < this._stagiaires.length; i ++)
        {
            this.sum = this.sum + this._stagiaires[i].calculerMoyenne();
        }
        return this.sum/this._stagiaires.length;
    }

    public getIndexMax()
    {
        for(var i = 0; i < this._stagiaires.length; i ++)
        {
            if(this._stagiaires[this.ind].calculerMoyenne() < this._stagiaires[i].calculerMoyenne())
            {
                this.ind = i;
            }
        }
        return this.ind;
    }

    public afficherNomMax() 
    {
        for(var i = 0; i < this._stagiaires.length; i ++)
        {
            if(this._stagiaires[i].calculerMoyenne() > this._stagiaires[this.meil].calculerMoyenne())
            {
                this.meil = i;
            }
        }

        return this._stagiaires[this.meil].__nom;
    }

    public afficherMinMax()
    {
        for(var i = 0; i < this._stagiaires.length; i ++)
        {
            if(this._stagiaires[i].calculerMoyenne() < this._stagiaires[this.min].calculerMoyenne())
            {
                this.min = i;
            }
        }

        return this._stagiaires[this.min].__nom;
    }

    public trouverMoyenneParNom(nom : string)
    {
        for(var i = 0; i < this._stagiaires.length; i ++)
        {
            if(this._stagiaires[i].__nom === nom)
            {
                this.byName = i;
            }
        }
        return  this._stagiaires[this.byName].calculerMoyenne();
    }   

    public get stagiaire()
    {
        for(var i = 0; i < this._stagiaires.length; i ++)
        {
            return this._stagiaires[i];
        }
    }

    
}