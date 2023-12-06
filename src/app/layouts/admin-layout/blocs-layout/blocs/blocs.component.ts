import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'app/models/bloc';
import { BlocService } from 'app/services/bloc-service.service';

@Component({
  selector: 'app-blocs',
  templateUrl: './blocs.component.html',
  styleUrls: ['./blocs.component.scss']
})
export class BlocsComponent implements OnInit {
  blocs: Bloc[] = [];
  filteredBlocs: Bloc[] = [];
  searchTerm: string = '';
  sortKey: string = '';  
  reverse: boolean = false; 
  constructor(private router: Router, private blocService: BlocService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadBlocs();
  }

  loadBlocs() {
    this.blocService.getAllBloc().subscribe(
      (data) => {
        this.blocs = data;
        this.filteredBlocs = this.blocs;
        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error fetching blocs:', error);
      }
    );
  }

  displayBlocs(idBloc: number) {
    this.router.navigate(['/admin/blocs/afficher', idBloc]);
  }

  updateBloc(idBloc: number) {
    this.router.navigate(['/admin/blocs/modifier', idBloc]);
  }

  addBloc() {
    this.router.navigate(['/admin/blocs/ajouter']);
  }

  deleteBloc(id: number) {
    this.blocService.deleteBloc(id).subscribe(
      () => {
        console.log('Bloc deleted successfully.');
        this.loadBlocs(); 
      },
      (error) => {
        console.error('Error deleting bloc:', error);
      }
    );
  }

  affecterAFoyer(idBloc: number) {
    this.router.navigate(['/admin/blocs/affecterFoyer', idBloc]);
   
    // console.log(`Affecter le bloc ${idBloc} à un foyer.`);
  }

  onSearchTermChange() {
    this.filteredBlocs = this.blocs.filter(bloc =>
      bloc.nomBloc.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  sort(key: string) {
    if (this.sortKey === key) {
     
      this.reverse = !this.reverse;
    } else {
     
      this.sortKey = key;
      this.reverse = false;
    }

    
    this.filteredBlocs.sort((a, b) => {
      const valueA = this.getPropertyValue(a, key);
      const valueB = this.getPropertyValue(b, key);

      if (valueA < valueB) {
        return this.reverse ? 1 : -1;
      } else if (valueA > valueB) {
        return this.reverse ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

 
  private getPropertyValue(obj: any, key: string): any {
    const keys = key.split('.');
    let value = obj;

    for (const k of keys) {
      value = value[k];
    }

    return value;
  }
}
