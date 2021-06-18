export class Stagiaire 
{
    public _nom : string;
    private _notes : number[];
    private somme : number = 0;
    public ind1 : number = 0;
    public ind2 : number = 0;

    public constructor (nom : string , note : number[])
    {
        this._nom = nom;
        this._notes = note;
    }

    public get __nom()
    {
        return this._nom;
    }

    public get __notes()
    {
            return this._notes;
    }

    public set nom(nom : string) 
    {
        this._nom = nom;
    }

    public set notes(note : number[])
    {
        this._notes = note;
    }

    public calculerMoyenne()
    {
        for (var i = 0; i < this._notes.length; i ++)
        {
            this.somme = this.somme + this._notes[i];
        }
        return this.somme/this._notes.length;
    }

    public trouverMax()
    {
        for(var j = 0; j < this._notes.length; j ++)
        {
            
            if(this._notes[this.ind1] < this._notes[j])
            {
                this.ind1 = j;
            }
        }
        return this._notes[this.ind1];
    }

    public trouverMin()
    {
        for(var j = 0; j < this._notes.length; j ++)
        {
            
            if(this._notes[this.ind2] > this._notes[j])
            {
                this.ind2 = j;
            }
        }
        return this._notes[this.ind2];
    }
}
