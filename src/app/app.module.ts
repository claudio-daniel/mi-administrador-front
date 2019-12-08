import { RouterModule, Routes } from '@angular/router';
import { InquilinoService } from './inquilinos/inquilino.service';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InquilinosComponent } from './inquilinos/inquilinos.component';
import { FormComponent } from './inquilinos/form/form.component';

const routes : Routes = [
  {path: '', redirectTo:'/inquilinos', pathMatch:'full'},
  {path: 'inquilinos', component : InquilinosComponent},
  {path: 'inquilinos/form', component : FormComponent},
  {path: 'inquilinos/form/:id', component : FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InquilinosComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [InquilinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
