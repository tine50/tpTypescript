import { Personne } from "./Personne";

export class ListePersonnes
{
    private _personnes : Personne[];
    private number : number;

    public constructor(ersonne : Personne)
    {
        this._personnes = this.personne;
    }

    // public get personne()
    // {
    //     for(var i = 0; i < this._personnes.length; i ++)
    //     {
    //         return this._personnes[i];
    //     }
    // }

    public set personne(personne : Personne[])
    {
        this._personnes = personne;
    }

    public findByNom(s: string)
    {
        for(let i  = 0; i < this._personnes.length; i++)
        {
            if(this._personnes[i].nom === s )
            {
                return this._personnes[i];
            }   
            else
            {
                return null;
            }
        }
    }

    public findByCodePostal(cp: string)
    {
        for(let i  = 0; i < this._personnes.length; i++)
        {
            if(this._personnes[i].adresse.length >= 0 && this._personnes[i].adresse.codePostal === cp)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    public countPersonneVille(ville: string)
    {
        for(let i  = 0; i < this._personnes.length; i++)
        {
            if(this._personnes[i].adresse.ville === ville )
            {
                return this.number++;
            }
        }
    }

    public editPersonneNom(oldNom: string, newNom: string)
    {
        for(let i  = 0; i < this._personnes.length; i++)
        {
            if(this._personnes[i].nom === oldNom )
            {
                this._personnes[i].nom = newNom;
            }
        }
    }

    public editPersonneVille(nom: string, newVille: string)
    {
        for(let i  = 0; i < this._personnes.length; i++)
        {
            if(this._personnes[i].adresse.ville === nom )
            {
                this._personnes[i].adresse.ville = newVille;
            } 
        }
        
    }
}