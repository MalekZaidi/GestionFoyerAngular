// foyer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from 'app/models/foyer';

@Injectable({
  providedIn: 'root',
})
export class FoyerService {
  private apiUrl = 'http://localhost:8083/a/foyer';

  constructor(private http: HttpClient) {}

  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/allfoyer`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}/add`, foyer);
  }

  updateFoyer(idFoyer: number, foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.apiUrl}/update/${idFoyer}`, foyer);
  }

  deleteFoyer(idFoyer: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${idFoyer}`);
  }


}
