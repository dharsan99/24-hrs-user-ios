import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor( private router: Router, route: ActivatedRoute) { 
    route.params.subscribe(val => {
      console.log(localStorage.getItem("24hrs-user-data"));
      var userdetails = (localStorage.getItem("24hrs-user-data"));
      console.log(userdetails);
      
      
      setTimeout(()=>{
        if(userdetails){
          this.router.navigate(['/homepage'])
        }else{
          this.router.navigate(['/signinpage'])
        }
      },2200)
    });
  }

  ngOnInit() {
  }

}
