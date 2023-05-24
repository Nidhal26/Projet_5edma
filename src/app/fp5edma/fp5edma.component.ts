import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ServicesService } from '../services.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-fp5edma',
  templateUrl: './fp5edma.component.html',
  styleUrls: ['./fp5edma.component.css']
})
export class FP5edmaComponent implements OnInit{

  ISuser: boolean = false;
name:any;
  constructor(private myservice:ServicesService,private spinner: NgxSpinnerService){ 
    this.myservice.user.subscribe(user => {
      if (user) {
        this.ISuser = true
        this.name=user.displayName
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
   }
  ngOnInit(): void {
    
  }
   f(){
    this.myservice.Logout()
   }

    loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

  }
  SignOut(){
    this.myservice.Logout();
  }
}
