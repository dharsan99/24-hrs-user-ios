import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
})
export class SearchpagePage implements OnInit {
 
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private http: HttpService,route: ActivatedRoute) { }


  ngOnInit() {
  }
  isVisible:any = false;
  isShown:any = true;
  term:any;
  
  list:any =[
        {
          "id": "1",
          "firstName": "onion",
          "lastName": "Cruise"
        },
        {
          "id": "2",
          "firstName": "tomato",
          "lastName": "Sharapova"
        },
        {
          "id": "3",
          "firstName": "apple",
          "lastName": "Bond"
        },{
          "id": "4",
          "firstName": "banana",
          "lastName": "Bond"
        },
        {
          "id": "5",
          "firstName": "jack fruits",
          "lastName": "Bond"
        },
        {
          "id": "6",
          "firstName": "mango",
          "lastName": "Bond"
        },
        {
          "id": "7",
          "firstName": "ginger",
          "lastName": "Bond"
        },{
          "id": "8",
          "firstName": "orange",
          "lastName": "Bond"
        }
  ]
  searchProduct(){
    this.isVisible = true;
    this.isShown = false;
  }

  backToHome(){
    this.router.navigate(['/homepage'])
  }
  
}

