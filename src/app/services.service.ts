import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from './auth/client';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  user: Observable<any>;
  constructor(private signInCompte:AngularFireAuth , private router:Router,private dataS: AngularFirestore) { 
    this.user = this.signInCompte.user //recuperer_user_Pour_tester_L'etat_de_session
   }


    signIn(Email: string, password: string) {
      return this.signInCompte.signInWithEmailAndPassword(Email, password + "NidhalAhmedAmir").then((data) => {
        console.log(data)
        this.router.navigate(["/test"])
      }).catch(() => {
        return this.signInCompte.signInWithEmailAndPassword(Email + "@gmail.com", password + "NidhalAhmedAmir").then((d) => {
          console.log(d)
          this.router.navigate(["/test"])
        }).catch((data) => { window.alert(data) })
      })
    }


    SignUp(Email: string, password: string) {
      return this.signInCompte.createUserWithEmailAndPassword(Email, password + "NidhalAhmedAmir").then((data) => {
        console.log(data)
        this.router.navigate(["/"])
      }).catch(() => {
        this.signInCompte.createUserWithEmailAndPassword(Email + "@gmail.com", password + "NidhalAhmedAmir").then((data) => {
          console.log(data)
          this.router.navigate(["/"])
        }).catch()
      })
    }

    Logout() {
      this.signInCompte.signOut();
    }






    addClient(client: Client) {
      this.dataS.collection("InfoClient").doc(this.a).get(this.a).subscribe(s=>{this.verif=s.exists})
      if (this.verif==true)
      {this.a = String(client.indice+1)}
      else
      {this.a = String(client.indice)}
      this.dataS.collection("InfoClient").doc(this.a).set({
        FirstName: client.Firstname,
        LastName: client.Lastname,
        class: client.class,
        indice: this.a
      }).then(() => { this.router.navigate(['/fp5edma']) }).catch((data) => { window.alert(data) })
    }
  
  
    editEtudiant(indices: number, client: Auth) {
      this.a = String(indices)
      this.dataS.collection("client").doc(this.a).set({
        FirstName: client.Firstname,
        LastName: client.Lastname,
        class: client.class,
        indice: indices
      }).then(() => { this.router.navigate(['/ListEtudiant']) }).catch((data) => { window.alert(data) })
    }
  
    deleteEtudiant(iindice: number) {
      this.a = String(iindice)
      return this.dataS.collection("eleve").doc(this.a).delete()
    }
  }

