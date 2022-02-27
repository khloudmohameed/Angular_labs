import { Component, OnInit,Input } from '@angular/core';
 import productlist from '../../assets/pro.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
@Input() Product:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToDetails() {
    this.router.navigate(['/product-detailes',this.Product.id])
  }


}
