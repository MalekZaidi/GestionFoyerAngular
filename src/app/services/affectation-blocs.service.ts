import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AffectationBlocsService {
  constructor(private http: HttpClient) {}

  getAvailableFoyers(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseURL}${environment.FoyerBackendAPIS}/allfoyer`);
  }

  affecterBlocAFoyer(idBloc: number, idFoyer: number): Observable<any> {
    return this.http.put<any>(`${environment.baseURL}bloc/affecterBlocFoyer/${idBloc}/${idFoyer}`, {});
  }
}
