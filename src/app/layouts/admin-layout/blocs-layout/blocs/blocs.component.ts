import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'app/models/bloc';
import { BlocService } from 'app/services/bloc-service.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blocs',
  templateUrl: './blocs.component.html',
  styleUrls: ['./blocs.component.scss']
})
export class BlocsComponent implements OnInit {
  blocs: Bloc[] = [];



  constructor(private router: Router, private blocService: BlocService, private cdRef: ChangeDetectorRef) {}
  ngOnInit() {
    this.loadBlocs();
  }

loadBlocs() {
  this.blocService.getAllBloc().subscribe(
    (data) => {
      this.blocs = data;
      console.log('Received blocs:', this.blocs);
      this.cdRef.detectChanges(); // Manually trigger change detection
    },
    (error) => {
      console.error('Error fetching blocs:', error);
    }
  );
}


  displayBlocs(idBloc: number) {
    this.router.navigate(['/admin/blocs/afficher', idBloc ]);
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
        this.loadBlocs(); // Reload the blocs after deletion
      },
      (error) => {
        console.error('Error deleting bloc:', error);
      }
    );
  }
  affecterAFoyer(idBloc: number) {
    this.router.navigate(['/admin/blocs/affecterFoyer', idBloc]);
    // Implement the logic to affect the bloc to a foyer here
   // console.log(`Affecter le bloc ${idBloc} à un foyer.`);

}
}
