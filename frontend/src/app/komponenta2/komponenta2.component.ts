import { Component, inject, OnInit } from '@angular/core';
import { Ispiti } from '../models/ispiti';
import { IspitService } from '../services/ispit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-komponenta2',
  standalone: true,
  imports: [],
  templateUrl: './komponenta2.component.html',
  styleUrl: './komponenta2.component.css'
})
export class Komponenta2Component implements OnInit {
  ispiti: Ispiti[]=[]
  vremenskiOpseg=false

  private ispitServis=inject(IspitService)
  private router=inject(Router)


  ngOnInit(): void {

    this.vremenskiOpseg=false;
    let datumOd= localStorage.getItem("datumOd")
    let datumDo= localStorage.getItem("datumDo")

    if(datumDo!=null && datumOd!=null){
      this.ispitServis.dohvatiIspiteIzVremenskogOpsega(new Date(datumOd), new Date(datumDo)).subscribe(data=>{
        if(data.length!=0 ){
          this.ispiti=data;
          this.vremenskiOpseg=true;
        }else{
          this.vremenskiOpseg=false;
        }
      });
    }
  }


    nazad(){
    this.router.navigate(['']);
  }





}
