import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { BlocService } from 'app/services/bloc-service.service'; // Importer votre service de bloc
import { ActivatedRoute, Router } from '@angular/router';

declare var Chart: any;

@Component({
  selector: 'app-statistics',
  templateUrl: './statistiques-blocs.component.html',
  styleUrls: ['./statistiques-blocs.component.scss']
})
export class StatistiquesBlocsComponent implements OnInit, AfterViewInit {
  blocsData: any = {
    labels: [],
    counts: [],
    capacities: [],
  };

  constructor(private route: ActivatedRoute,private router: Router,private el: ElementRef, private blocService: BlocService) {}

  ngOnInit() {
    // Chargez les données des blocs depuis le service ou l'API ici
    this.loadBlocsData();
  }

  ngAfterViewInit() {
    // Créez le graphique après que les données ont été chargées
    this.createChart();
  }

  loadBlocsData() {
    // Utilisez votre service pour récupérer les données réelles des blocs
    this.blocService.getAllBloc().subscribe(
      (data) => {
        // Supposons que data est un tableau d'objets Bloc
        this.blocsData.labels = data.map((bloc) => bloc.nomBloc);
        this.blocsData.capacities = data.map((bloc) =>bloc.capaciteBloc);

        // Une fois les données chargées, créez le graphique
        this.createChart();
      },
      (error) => {
        console.error('Erreur lors du chargement des données des blocs:', error);
      }
    );
  }

  createChart() {
    const canvas: any = this.el.nativeElement.querySelector('#myChart');
    const ctx = canvas.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.blocsData.labels,
        datasets: [

          {
            label: 'Capacité des blocs',
            data: this.blocsData.capacities,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  goBack(): void {
    this.router.navigate(['/admin/blocs']);
  }
}
/*
// statistics.component.ts
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-statistics',
  templateUrl: './statistiques-blocs.component.html',
  styleUrls: ['./statistiques-blocs.component.scss']
})
export class StatistiquesBlocsComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const blocsData = {
      labels: ['Bloc 1', 'Bloc 2', 'Bloc 3', 'Bloc 4'],
      counts: [10, 15, 8, 12],
      capacities: [50, 30, 40, 25],
    };

    const canvas: any = this.el.nativeElement.querySelector('#myChart');
    const ctx = canvas.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: blocsData.labels,
        datasets: [
          {
            label: 'Nombre de blocs',
            data: blocsData.counts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Capacité des blocs',
            data: blocsData.capacities,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

*/