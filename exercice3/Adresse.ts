export class Adresse
{
    private _rue : string;
    private _ville : string;
    private _codePostal : string;

    public constructor(rue : string, ville : string, codePostal : string)
    {
        this._rue = rue;
        this._ville = ville;
        this._codePostal = codePostal;
    }
    
    public get rue()
    {
        return this._rue;
    }

    public get ville()
    {
        return this._ville;
    }

    public get codePostal()
    {
        return this._codePostal;
    }

    public set ville(ville : string)
    {
        this.ville = ville;
    }

    public set rue(rue : string)
    {
        this.rue = rue;
    }

    public set codePostal(codePostal : string)
    {
        this._codePostal = codePostal;
    }
}