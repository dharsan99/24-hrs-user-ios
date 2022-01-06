import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'; 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }, ))
      ])
    ]),
    trigger('slideup', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 }, ))
      ])
    ])
  ]
})
export class SigninPage implements OnInit {

   constructor(private router: Router,private http:HttpService,
    private toastCtrl: ToastController){}

  ngOnInit() {
  }

  signinemailid:any = '';
  signinpassword:any = '';

  signin(){
    const Data = {
      email_id :  this.signinemailid,
      password : this.signinpassword 
    }
    
    this.http.post('/user_login', Data).subscribe((response: any) => {
      console.log(response);
      if(response.success == "true"){
        const obj:any={
          "id": response.tbid,
          "username": response.user_name,
          "mobile": response.mobile_number,
          "email" : response.email_id,
          "token" : response.token
        }        
        
        const encodeText:any = btoa(JSON.stringify(obj))
        localStorage.setItem("24hrs-user-data",encodeText)
        localStorage.setItem("token", response.token)
        console.log(encodeText);
        
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })

        this.navigateTabs()
      }else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Please enter a valid email (or) password'
        })
      }
    },(error: any) =>{
      console.log(error);
    }
    );
  }

  navigateTabs()
  {
    this.signinemailid ='';
    this.signinpassword ='';
    this.router.navigate(['/selectcategories'])
  }

  signupPage(){
    this.router.navigate(['/signuppage'])
  }

}
