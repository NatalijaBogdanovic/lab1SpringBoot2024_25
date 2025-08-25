import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studenti } from '../models/studenti';
import { IspitService } from '../services/ispit.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-komponenta1',
  standalone: true,
  imports: [],
  templateUrl: './komponenta1.component.html',
  styleUrl: './komponenta1.component.css'
})
export class Komponenta1Component implements OnInit {

  private ruta= inject(ActivatedRoute)
  private router= inject(Router)
  private studentServis= inject(StudentService)
  private ispitServis= inject(IspitService)
  prosekOcena=0;
  student: Studenti = new Studenti();
  porukaGreske=""
  ispisatiPodatke=false;



  ngOnInit(): void {
    this.ispisatiPodatke=false;

    let brojIndeksa = this.ruta.snapshot.paramMap.get("brojIndeksa");

    if (brojIndeksa != null) {
      this.studentServis.dohvatiStudentaPoIndeksu(brojIndeksa).subscribe(data => {
        if(data==null){
          this.porukaGreske="Student ne postoji"
        }
        else{
          this.student = data;
          if(brojIndeksa!=null){
            this.ispitServis.izracunajProsekStudenta(brojIndeksa).subscribe(pod=>{
              if(pod==0){
                this.porukaGreske="Ovaj student nije polagao ni jedan ispit"
              }
              else{
                this.prosekOcena=pod;
                this.ispisatiPodatke=true;
              }
            })
          }
        }
      });
    } else {
      // Handle the case when brojIndeksa is null, e.g., show an error or redirect
      console.error('Broj indeksa nije pronađen u ruti.');
    }


  }

  nazad(){
    this.router.navigate(['']);
  }



}
