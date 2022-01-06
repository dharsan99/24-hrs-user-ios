import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-report-seller',
  templateUrl: './report-seller.component.html',
  styleUrls: ['./report-seller.component.scss'],
})
export class ReportSellerComponent implements OnInit {

  constructor( public modalController: ModalController) { }

  ngOnInit() {
    
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });

}

}
