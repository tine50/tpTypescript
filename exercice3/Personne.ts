import { Adresse } from "./Adresse";

export class Personne
{
    private _nom : string;
    private _sexe : string;
    private _adresse : Adresse[];

    public constructor(nom : string, sexe : string, adresse : Adresse[])
    {
        this._nom = nom;
        this._sexe = sexe;
        this._adresse = adresse;
    }

    public get nom()
    {
        return this._nom;
    }

    public get sexe()
    {
        return this._sexe;
    }

    // public get adresse()
    // {
    //     for(var i = 0; i < this._adresse.length; i ++)
    //     {
    //         return this._adresse[];
    //     }
        
    // }

    public set nom(nom : string)
    {
        this._nom = nom;
    }

    public set sexe(sexe : string)
    {
        this._sexe = sexe;
    }

    public set adresse(adresse)
    {
        for(var i = 0; i < this._adresse.length; i ++)
        {
            this._adresse[i] = adresse;
        }
    }
}
