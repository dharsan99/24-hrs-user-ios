import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-selectcategories',
  templateUrl: './selectcategories.page.html',
  styleUrls: ['./selectcategories.page.scss'],
})
export class SelectcategoriesPage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {
      route.params.subscribe(val => {
        this.getCategory()
        console.log(this.selectedCategoryList);
      });
     }


  ngOnInit() {
  }

  userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));

  getCategoryList:any = [];
  selectedCategoryList:any = []

  buttonColor: string = '#000'; //Default Color
  addEvent(){
    this.buttonColor = '#345465'; //desired Color
    
    /*
    YOUR FUNCTION CODE
    */
    
    }


  toggleClass(item) {
    item.active = !item.active;
    this.selectedCategoryList.push(item.tbid) ;
    // console.log(item);
    console.log(this.selectedCategoryList);
    
  }


  verify() {
    const storeCategory = this.selectedCategoryList.toString();
    console.log(storeCategory);
    
    const Data = {
      tbid : this.userdetails.id,
      store_category: storeCategory
    }
    console.log(Data);
    this.http.post('/update_store_category',Data).subscribe((response: any) => {
     
    }, (error: any) => {
      console.log(error);
    });

    this.router.navigate(['/homepage'])
  }

  getCategory() {
    console.log(this.selectedCategoryList);
    this.http.get('/list_category',).subscribe((response: any) => {
      this.getCategoryList = response.records
    }, (error: any) => {
      console.log(error);
    });
  }
}

