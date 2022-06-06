import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList : Product[] = []
  newProduct : Product = {} as Product 

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.service.getProductList().subscribe(items => {
      this.productList = items
    })    
  }

  saveData(form: NgForm) {
    if (this.newProduct.id) {
      this.service.updateProduct(this.newProduct).subscribe(item => {
        form.resetForm()
        this.newProduct = {} as Product
        this.loadData()
      })
    } else {
      this.service.createProduct(this.newProduct).subscribe(item => {
        form.resetForm()
        this.newProduct = {} as Product
        this.loadData()
      })
    }
  }

  deleteProduct(productId: number) {
    this.service.deleteProduct(productId).subscribe(() => {
      this.loadData()
    })
  }

  updateProduct(product: Product) {
    this.newProduct.id = product.id
    this.newProduct.nome = product.nome
    this.newProduct.valor = product.valor
    this.newProduct.quantidade = product.quantidade
  }

}
