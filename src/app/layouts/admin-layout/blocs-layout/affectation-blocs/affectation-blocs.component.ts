import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AffectationBlocsService } from 'app/services/affectation-blocs.service';
@Component({
  selector: 'app-affectation-blocs',
  templateUrl: './affectation-blocs.component.html',
  styleUrls: ['./affectation-blocs.component.scss']
})
export class AffectationBlocsComponent implements OnInit {
  idBloc: number;
  availableFoyers: any[] = [];

  constructor(private route: ActivatedRoute, private affectationService: AffectationBlocsService,private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.idBloc = +paramMap.get('idBloc');
    });

    // Call the service to get available foyers
    this.affectationService.getAvailableFoyers().subscribe(
      (data) => {
        this.availableFoyers = data;
        console.log('Received Foyer:', this.availableFoyers);
      },
      (error) => {
        console.error('Error fetching available foyers:', error);
      }
    );
  }

  affecterBlocAFoyer(idFoyer: number): void {
    // Call the service to affect the bloc to the selected foyer
    this.affectationService.affecterBlocAFoyer(this.idBloc, idFoyer).subscribe(
      () => {
        console.log('Bloc affected to foyer successfully.');
        
        setTimeout(() => {
          this.router.navigate(['/admin/blocs']);
        }, 2000); // 3000 milliseconds (3 seconds) delay before navigation
      },
      (error) => {
        console.error('Error affecting bloc to foyer:', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/admin/blocs']);
  }
}