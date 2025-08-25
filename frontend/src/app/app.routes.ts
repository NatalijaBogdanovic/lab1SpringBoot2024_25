import { Routes } from '@angular/router';
import { Komponenta1Component } from './komponenta1/komponenta1.component';
import { Komponenta2Component } from './komponenta2/komponenta2.component';
import { Komponenta3Component } from './komponenta3/komponenta3.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

export const routes: Routes = [
  {path: "", component: PocetnaComponent},
  {path: "k1", component: Komponenta1Component},
  {path:"k2", component:Komponenta2Component},
  {path:"k3", component:Komponenta3Component}
];
