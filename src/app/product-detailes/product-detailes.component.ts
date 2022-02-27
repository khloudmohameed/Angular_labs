import { Component, OnInit } from '@angular/core';
import productlist from '../../assets/pro.json'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss']
})
export class ProductDetailesComponent implements OnInit {
  productDetalis:any;

  constructor(private activatedRoute: ActivatedRoute) {
    const activeID = this.activatedRoute.snapshot.params['id'];
  this.productDetalis=productlist.find(product =>product.id == activeID);
    console.log(this.productDetalis);
  }


  ngOnInit(): void {
  }

}
