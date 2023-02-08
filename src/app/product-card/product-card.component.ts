import { ShoppingCartItem } from './../models/shopping-cart-item';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
@Input('product')product:Product;
@Input('show-actions') showActions = true;
@Input('shopping-cart')ShoppingCart :ShoppingCart
@Input('width')width='20';
  constructor(private cartService:ShoppingCartService) { }




  addToCart(product:any)
  {
this.cartService.addToCart(this.product)
  }


}