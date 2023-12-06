import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'app/services/bloc-service.service';
import { Bloc } from 'app/models/bloc';
import { Foyer } from 'app/models/foyer';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-afficher-bloc',
  templateUrl: './afficher-blocs.component.html',
  styleUrls: ['./afficher-blocs.component.scss']
})
export class AfficherBlocsComponent implements OnInit {
  idBloc: number;
  bloc: Bloc;
  foyers: Foyer[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blocService: BlocService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.idBloc = +paramMap.get('idBloc');
      this.loadBlocDetails(this.idBloc)
    });
  }

  loadBlocDetails(idBloc: number): void {
    this.blocService.getBlocById(idBloc).subscribe(
      (data) => {
        this.bloc = data;
        console.log('Bloc details:', this.bloc);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching bloc details:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/admin/blocs']);
  }
}
