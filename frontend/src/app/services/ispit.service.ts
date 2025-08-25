import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Ispiti } from '../models/ispiti';

@Injectable({
  providedIn: 'root'
})
export class IspitService {

  constructor() { }
  private http=inject(HttpClient)
  private backendUrl = "http://localhost:8080";

  izracunajProsekStudenta(brojIndeksa: string){
    return this.http.get<number>(`${this.backendUrl}/ispit/prosekDatogStudenta/${brojIndeksa}`)

  }

  dohvatiIspiteIzVremenskogOpsega(datumOd: Date, datumDo: Date){

    const data={
      datumOd: datumOd, datumDo:datumDo
    }

    return this.http.post<Ispiti[]>(`${this.backendUrl}/ispit/ispitiIzIntervala`, data)

  }

  dodavanjeIspitaZaStudenta(ispit: Ispiti){
    return this.http.post<Ispiti[]>(`${this.backendUrl}/ispit/dodajIspit`, ispit);
  }

}
