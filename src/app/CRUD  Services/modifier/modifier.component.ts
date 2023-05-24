import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  ISuser: boolean = false;
name:any;
test:any
  constructor(private MyService: ServicesService, private router: Router,private spinner: NgxSpinnerService) {
    this.test=this.MyService.getCodeOffre()
    this.MyService.user.subscribe(user => {
      if (user) {
        this.ISuser = true
        this.name=user.displayName
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
    
  }ngOnInit(): void {
   
    this.SetOffre();
  
  }

  loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

  }

  SignOut(){
    this.MyService.Logout();
  }
  ArrayOffre = {
    Username:'',
    Numero:'',
    Email:'',
    Titre:'',
    Description:'',
    Image:''
  };
  
  SetOffre() {
    console.log(this.MyService.getCodeOffre())
    console.log(this.test)
    this.MyService.getOffre(this.test).then(data => {
     this.ArrayOffre.Numero=data.get('Numero')
     this.ArrayOffre.Titre=data.get('Titre')
     this.ArrayOffre.Image=data.get('Image')
     this.ArrayOffre.Username=data.get('Username')
     this.ArrayOffre.Description=data.get('Description')
  })
}

UpdateOffre(form:{Username:string,Description:string,Numero:string,Image:string,Titre:string}){
  this.MyService.UpdateOffre(form);
}


}
