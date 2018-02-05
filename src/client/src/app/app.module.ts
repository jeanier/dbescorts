import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EscortsService } from './services/escorts.service';
import { AppComponent } from './app.component';
import { EscortsComponent } from './components/escorts/escorts.component';


@NgModule({
  declarations: [
    AppComponent,
    EscortsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EscortsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
