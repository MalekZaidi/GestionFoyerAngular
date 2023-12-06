
import { Foyer } from 'app/models/foyer'; 
import { Chambre } from 'app/models/chambre'; 
export class Bloc {
    idBloc: number;
    nomBloc: string;
    capaciteBloc: number;
    foyer?: Foyer; 
    chambres?: Chambre[]; 
/*
    getIdBloc(): number {
        return this.idBloc;
      }
    
      getNomBloc(): string {
        return this.nomBloc;
      }
    
      getCapaciteBloc(): number {
        return this.capaciteBloc;
      }
    
      getFoyer(): Foyer {
        return this.foyer;
      }
    
      getChambres(): Chambre[] {
        return this.chambres;
      }
    
      setIdBloc(idBloc: number): void {
        this.idBloc = idBloc;
      }
    
      setNomBloc(nomBloc: string): void {
        this.nomBloc = nomBloc;
      }
    
      setCapaciteBloc(capaciteBloc: number): void {
        this.capaciteBloc = capaciteBloc;
      }
    
      setFoyer(foyer: Foyer): void {
        this.foyer = foyer;
      }
    
      setChambres(chambres: Chambre[]): void {
        this.chambres = chambres;
      }*/
    }
  