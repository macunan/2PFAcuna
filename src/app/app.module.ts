import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import {Routes,RouterModule} from '@angular/router';
const appRoute: Routes = [
{path:'',component:HomeComponent },
{path:'Home',component:HomeComponent },
{path:'Santiago',component:SantiagoComponent} ,
{path:'Valparaiso',component:ValparaisoComponent} ,
{path:'About',component:AboutComponent} 
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule,
 RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
