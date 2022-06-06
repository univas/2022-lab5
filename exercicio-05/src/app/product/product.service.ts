import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serverApi = 'https://secure-taiga-16048.herokuapp.com/products/'

  constructor(private httpClient: HttpClient) { }

  getProductList() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.serverApi)
  }

  createProduct(product: Product) : Observable<Product> {
    return this.httpClient.post<Product>(this.serverApi, product)
  }

  updateProduct(product: Product) : Observable<Product> {
    return this.httpClient.put<Product>(this.serverApi + product.id, product)
  }

  deleteProduct(productId: number) : Observable<any> {
    return this.httpClient.delete(this.serverApi + productId, {
      headers: undefined,
      context: undefined,
      observe: undefined,
      params: undefined,
      reportProgress: undefined,
      responseType: 'text'
    })
  }
}
