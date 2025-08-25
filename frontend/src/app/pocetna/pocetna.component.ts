import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ispiti } from '../models/ispiti';

@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css'
})
export class PocetnaComponent {

  private router= inject(Router)

  //prva forma
  prvaFormaIndeks: string=""
  porukaPrvaForma: string=""
  forma1(){
    if(this.prvaFormaIndeks==""){
      this.porukaPrvaForma="Unesite broj indeksa"
    }
    else{
      this.porukaPrvaForma=""
      let regex=/^\d{4}\/\d{4}$/
      if(!regex.test(this.prvaFormaIndeks)){
        this.porukaPrvaForma="Broj indeksa mora biti u formatu XXXX/YYYY"
      }
      else{
        let index= this.prvaFormaIndeks.split('/')
        this.router.navigate(['k1', {brojIndeksa: index[0]+index[1]}]);
      }
    }

  }

  //druga forma
  drugaFormaDatumOd: string=""
  drugaFormaDatumDo: string=""
  porukaDrugaForma: string=""
  forma2(){

    let datumOd = new Date(this.drugaFormaDatumOd);
    let datumDo = new Date(this.drugaFormaDatumDo);

    if(this.drugaFormaDatumOd=="" || this.drugaFormaDatumDo==""){
      this.porukaDrugaForma="Unesite oba datuma"
    }
    else{
      if(this.drugaFormaDatumDo<this.drugaFormaDatumOd || this.drugaFormaDatumOd>this.drugaFormaDatumDo){
        this.porukaDrugaForma="Datumi nisu u dobrom poretku"
      }
      else{
        this.porukaDrugaForma=""
        localStorage.setItem("datumOd", this.drugaFormaDatumOd);
        localStorage.setItem("datumDo", this.drugaFormaDatumDo);
        this.router.navigate(['k2']);
      }
    }

  }

  //treca forma
  ispit: Ispiti=new Ispiti()
  porukaTrecaForma: string=""
  forma3(){
    if(this.ispit.student=="" || this.ispit.sifra=="" || this.ispit.ocena<5 || this.ispit.ocena>10){
      this.porukaTrecaForma="Niste ispravno popunili sva polja"
    }
    else{
      let regex=/^\d{4}\/\d{4}$/
      if(!regex.test(this.ispit.student)){
        this.porukaTrecaForma="Broj indeksa mora biti u formatu XXXX/YYYY"
      }
      else{
        this.porukaTrecaForma=""
        localStorage.setItem("ispit", JSON.stringify(this.ispit));
        this.router.navigate(['k3']);
      }
    }
  }


}
