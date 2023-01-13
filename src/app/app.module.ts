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
import { HttpClientModule } from '@angular/common/http';
import { PokemonServiceService } from './Services/Pokemon/pokemon-service.service';
import { PokemonViewComponentComponent } from './Components/pokemon-view-component/pokemon-view-component.component';
import { PokeballSelectorComponentComponent } from './Components/pokeball-selector-component/pokeball-selector-component.component';
import {MenuModule} from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
@NgModule({
    declarations: [
        AppComponent,
        RootViewComponent,
        GrassViewComponent,
        CapturesViewComponent,
        PokemonViewComponentComponent,
        PokeballSelectorComponentComponent,

    ],
    providers: [
        AuthServiceService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
        PokemonServiceService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ButtonModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        CardModule,
        HttpClientModule,
        MenuModule,

    ],

})
export class AppModule { }
