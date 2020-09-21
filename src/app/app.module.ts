import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio2/incrementador_integracion/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzados/rutas/app.routes';
import { NavbarComponent } from './avanzados/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzados/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
