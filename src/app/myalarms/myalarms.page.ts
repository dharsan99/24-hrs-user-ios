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
  selector: 'app-myalarms',
  templateUrl: './myalarms.page.html',
  styleUrls: ['./myalarms.page.scss'],
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
export class MyalarmsPage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute,public alertController: AlertController) { 
      route.params.subscribe(val => {
        
        this.getAlarmList()
        
      });
    }

  ngOnInit() {
  }

  isVisible:any = false;
  alarmList:any = []

  searchPage(){
    this.router.navigate(['/searchpage'])
  }
  notification(){
    this.router.navigate(['/notification']) 
  }

  newAlarm(){
    this.router.navigate(['/setalarm']) 
  }


  getAlarmList() {
    this.http.get('/store_read_alarm').subscribe((response: any) => {
     
      console.log(response);
      
      if(response.success == "false"){
        this.isVisible = true;
       
      }else{
        this.alarmList = response.records
      }
      
    }, (error: any) => {
      console.log(error);
    });
  }

}
