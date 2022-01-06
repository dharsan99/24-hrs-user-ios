import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'; 

@Component({
  selector: 'app-setalarm',
  templateUrl: './setalarm.page.html',
  styleUrls: ['./setalarm.page.scss'],
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
export class SetalarmPage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute,) {
    route.params.subscribe(val => {
      this.storeList()
    });
  }

  ngOnInit() {

  }

  isVisible: any = false;
  isShown: any = true;
  selectItem: any;

  forproduct: any = false;
  forstore: any = false;
  getStoreList: any = [];

  searchPage() {
    this.router.navigate(['/searchpage'])
  }
  notification() {
    this.router.navigate(['/notification'])
  }

  forProduct() {
    this.forproduct = true;
    this.forstore = false;
  }

  forStore() {
    this.forstore = true;
    this.forproduct = false;
  }

  storeList() {
    console.log(this.getStoreList);
    this.http.get('/list_store',).subscribe((response: any) => {
      console.log(response);
      this.getStoreList = response.records
      console.log(response.records);
      console.log(this.getStoreList);


    }, (error: any) => {
      console.log(error);
    });
  }

  selectProduct(item){
    this.selectItem = item.firstName ;
    this.isVisible = false;
    console.log(item);
  }

  list: any = [
    {
      "id": "1",
      "firstName": "onion",
    },
    {
      "id": "2",
      "firstName": "tomato",
    },
    {
      "id": "3",
      "firstName": "apple",
    }, {
      "id": "4",
      "firstName": "banana",
    },
    {
      "id": "5",
      "firstName": "jack fruits",
    },
    {
      "id": "6",
      "firstName": "mango",
    },
    {
      "id": "7",
      "firstName": "ginger",
    }, {
      "id": "8",
      "firstName": "orange",
    }
  ]
  searchProduct() {
    this.isVisible = true;
    this.isShown = false;
  }

  backToHome() {
    this.router.navigate(['/homepage'])
  }

}
