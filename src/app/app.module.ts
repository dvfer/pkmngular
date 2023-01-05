import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AuthServiceService } from './Services/auth-service.service';
import { AuthComponent } from "./Components/auth/auth.component";
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
@NgModule({
    declarations: [
        AppComponent,
        AuthComponent
    ],
    providers: [
        AuthServiceService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
    ]
})
export class AppModule { }
