import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AuthServiceService } from './Services/Auth/auth-service.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RootViewComponent } from './Components/root-view/root-view.component';
import {CardModule} from 'primeng/card';
import { GrassViewComponent } from './Components/grass-view/grass-view.component';
import { CapturesViewComponent } from './Components/captures-view/captures-view.component';
@NgModule({
    declarations: [
        AppComponent,
        RootViewComponent,
        GrassViewComponent,
        CapturesViewComponent
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
        CardModule,
    ]
})
export class AppModule { }
