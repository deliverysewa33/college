import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
declare var $: any;
import swal from 'sweetalert2';
import { Items } from '../../../model/items';
import { error } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  item: Items[];
  constructor(private _product: HomeService) {

  }

  ngOnInit() {
    
    this.showAllProduct();
    
  }

  showAllProduct(){

    this._product.listProduct().subscribe(data => {

      console.log('Gallery', this.data);
      this.item = data;
      console.log('gal',this.item);
    },
      error => {
        console.log('Gellery Error', error)
      }


    );

  }
}
