import { Component, inject, OnInit } from '@angular/core';
import { Ispiti } from '../models/ispiti';
import { IspitService } from '../services/ispit.service';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-komponenta3',
  standalone: true,
  imports: [],
  templateUrl: './komponenta3.component.html',
  styleUrl: './komponenta3.component.css'
})
export class Komponenta3Component implements OnInit {

  ispiti: Ispiti []=[];
  ispisatiPodatke=false;
  poslednjIspit: Ispiti= new Ispiti();
  private ispitServis = inject(IspitService);
  private studentServis = inject(StudentService);
  private router = inject(Router);
  poruka="";

  ngOnInit(): void {
    this.ispisatiPodatke=false;
    let ispitStr= localStorage.getItem("ispit");

    if(ispitStr!=null){
      this.poslednjIspit=JSON.parse(ispitStr);
      //sad postavljam datum ispita koj unosim na danasnji
      this.poslednjIspit.datum = new Date();

      this.studentServis.dohvatiStudentaPoIndeksu(this.poslednjIspit.student.substring(0,4) + this.poslednjIspit.student.substring(5,9)).subscribe(data=>{
        if(data==null){
          this.poruka="Student ne postoji";
        }
        else{
          this.ispisatiPodatke=true;
          this.ispitServis.dodavanjeIspitaZaStudenta(this.poslednjIspit).subscribe(data=>{
              this.ispiti=data;
          });
        }
      })
    }
  }
  nazad(){
    this.router.navigate(['']);
  }

}
