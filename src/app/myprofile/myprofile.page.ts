import { Component,OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
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
export class MyprofilePage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute,public alertController: AlertController) {
      route.params.subscribe(val => {
        this.PopupModel = false;
        console.log(this.userdetails);
        this.updateProfile()
        this.getSelectCategory()
        
      });
    }

  ngOnInit() {
    console.log(this.userdetails);
    
  }
  userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
  
  PopupModel: any = false;

  updateUsername:any = this.userdetails.username;
  updateMobile:any = this.userdetails.mobile;
  updateEmail:any = this.userdetails.email;

  getCategoryList:any = [];

  support(){
    this.router.navigate(['/support'])
  }

  backToprivious(){
    this.PopupModel = false;
    
   }
  popupModelOpen() {
      this.PopupModel = true;
  }

  changeCategory(){
    this.router.navigate(['selectcategories'])
  }

  updateProfile(){
    const updateData = {
      tbid: this.userdetails.id,
      user_name: this.updateUsername,
      email_id: this.updateEmail,
      mobile_number: this.updateMobile
    }
    this.http.get('/user_update_profile', ).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        
        this.PopupModel = false;
        
      } else {

      }
    }, (error: any) => {
      console.log(error);
    });

  }

  back(){
    this.router.navigate(['/homepage'])
  }
  logout(){
    localStorage.removeItem("24hrs-user-data")
    this.router.navigate(['/'])
  }

  deleteAccount(){
    this.presentAlertConfirm()
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'buttonCss ',
      header: 'Delete Your Account!',
      message: 'Are You <strong>Sure</strong>!!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-danger',
          handler: (blah) => {
            console.log('Confirm Cancel: No');
          }
        }, {
          text: 'Yes',
          cssClass: 'buttonCss',
          handler: () => {
            console.log('Confirm Okay');
            this.showPrompt()
          }
        }
      ]
    });

    await alert.present();
  }

  showPrompt() {
    this.alertController.create({
      cssClass: 'buttonCss ',
      header: 'Enter The Password To Delete Your Account',
      inputs: [
        {
          name: 'Place',
          placeholder: 'Password',
          
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Delete Account!',
          handler: (data: any) => {
            console.log('Saved Information', data);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  getSelectCategory() {
    this.http.get('/store_category').subscribe((response: any) => {
      this.getCategoryList = response.records
      console.log(response);
      
    }, (error: any) => {
      console.log(error);
    });
  }
}
