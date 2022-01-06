import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ReportSellerComponent } from '../report-seller/report-seller.component';
import { ThemeService } from '../darkmode/theme.service';
import {trigger, style,state, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
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
        animate('400ms 200ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 }, ))
      ])
    ])
  ]
  
})

export class FolderPage implements OnInit {
  public folder: string;

  constructor(private theme:ThemeService, private router: Router,private activatedRoute: ActivatedRoute,private http: HttpService,route: ActivatedRoute,public popoverController: PopoverController) {
    route.params.subscribe(val => {
      this.getSelectCategory()
      this.ProductList()
     
    });
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  click:any = false;

  userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));

  isvisible:any = false;
  productDetails:any = true;
  storedetailsVisible:any = false;

  getCategoryList:any = [];
  productlist:any = [];

  async popup(ev: any) {
    const popover = await this.popoverController.create({
      component: ReportSellerComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  slideOpts = {
    slidesPerView:3.0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  }

  toggle = true;
  status = "Enable";

  selectedItem(item) {
    console.log(item);
    
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
  }
    

  singleCard(){
    this.isvisible =true;
  }

  storeDetails(){
    this.storedetailsVisible = true;
    this.productDetails = false;
  }

  navigateHome(){
    this.storedetailsVisible = false;
    this.isvisible = false;
    this.productDetails = true;
    
  }

  searchPage(){
    this.router.navigate(['/searchpage'])
  }

  enableDark(){
    this.theme.enableDark();
  }

  enableLight(){
    this.theme.enableLight();
  }
  
  setalarm(){
    this.router.navigate(['/setalarm'])             
  }

  notification(){
    this.router.navigate(['/notification']) 
  }

  getSelectCategory() {
    this.http.get('/store_category').subscribe((response: any) => {
      this.getCategoryList = response.records
      console.log(response);
      
    }, (error: any) => {
      console.log(error);
    });
  }


  ProductList(){
    this.http.get('/product_list',  ).subscribe((response: any) => {
      this.productlist = response.records;
      console.log(this.productlist);
      
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  activeItem:any = "home";

  clickSlide(item){
    console.log(item);
    
    this.activeItem = item;
    if( this.activeItem == "home" ){
     
    }else{
      this.activeItem = item;
    }
return
    this.http.post('/list_product', '' ).subscribe((response: any) => {
      this.productlist = response.records;
      console.log(this.productlist);
      
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  

}
