import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { AppRoutingModule } from './app-routing.module';

import { DataJsonService } from './data-json.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [DataJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
