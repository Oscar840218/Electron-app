import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { MathComponent } from './components/math/math.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DragulaModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
