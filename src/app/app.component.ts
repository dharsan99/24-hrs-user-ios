import { Component } from '@angular/core';
import { AnimationController,Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
 

  constructor(private http: HttpService, private router: Router, route: ActivatedRoute, private platform:Platform,
     private animaionCtrl: AnimationController ) {
      
    route.params.subscribe(val => {
     
    });
  }
 ngOnInit() {
  this.activeItem = "home"
 }
 listOfProduct:any;
  activeItem:any = "home" ;

  close(){

    this.router.navigate(['/'])
  }

  home(){
    this.activeItem = "home"
    this.router.navigate(['/homepage'])
             
  } 
  setalarm(){
    this.activeItem = "setalarm"
    this.router.navigate(['/setalarm'])             
  }

  myAlarm(){
    this.activeItem = "myalarms"
    this.router.navigate(['/myalarms']) 
  }
 

  myprofile(){
    this.activeItem = "myprofile"
    this.router.navigate(['/myprofile'])             
  }

  support(){
    this.activeItem = "support"
    this.router.navigate(['/support'])             
  }

  logout(){
    this.activeItem = "home"
    localStorage.removeItem("24hrs-user-data")
    localStorage.removeItem("token")
    this.router.navigate(['/'])
  }
  

 

}
