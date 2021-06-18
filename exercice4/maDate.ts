export class maDate
{
    private _jour : number;
    private _mois : number;
    private _annee : number;

    public get jour()
    {
        return this._jour;
    }

    public get mois()
    {
        return this._mois;
    }

    public get annee()
    {
        return this._annee;
    }

    public set mois(mois : number)
    {
        this.mois = mois;
    }

    public set jour(jour : number)
    {
        this.jour = jour;
    }

    public set annee(annee : number)
    {
        this._annee = annee;
    }
}
