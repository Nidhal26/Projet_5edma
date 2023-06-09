import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

//____________________FireBase-Begin_____________________________________________________

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage'; 

//____________________FireBase-End_____________Ngx-Spinner-Begin________________________________________

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { FP5edmaComponent } from './fp5edma/fp5edma.component';
import { AjouterComponent } from './CRUD  Services/ajouter/ajouter.component';
import { ModifierComponent } from './CRUD  Services/modifier/modifier.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DemandeComponent } from './demande/demande.component';
import { OffreComponent } from './offre/offre.component';
import { ParametreComponent } from './parametre/parametre.component';
import { CommandeComponent } from './commande/commande.component';
import { AjouterdemandeComponent } from './CRUD  Services/ajouterdemande/ajouterdemande.component';
import { CompteComponent } from './compte/compte.component';

//______________________Angular-Component________________Ngx-Spinner-End__________________________________________________



//______________________________________Ngx-Spinner-End__________________________________________________

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FP5edmaComponent,
    AjouterComponent,
    ModifierComponent,
    AccueilComponent,
    DemandeComponent,
    OffreComponent,
    ParametreComponent,
    CommandeComponent,
    AjouterdemandeComponent,
    CompteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    DatePipe
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
