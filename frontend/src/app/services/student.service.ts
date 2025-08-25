import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Studenti } from '../models/studenti';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  private backendUrl = "http://localhost:8080";

  private http= inject(HttpClient);

  dohvatiStudentaPoIndeksu(brojIndeksa: string) {
    return this.http.get<Studenti>(`${this.backendUrl}/student/dohvatiStudenta/${brojIndeksa}`);
  }
}
