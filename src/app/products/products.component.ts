import { Component, OnInit } from '@angular/core';

import productlist from "../../assets/pro.json"
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

   prdoucts=productlist
  
  constructor() { }

  ngOnInit(): void {
  }

}
