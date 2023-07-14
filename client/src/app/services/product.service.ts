import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/getall`);
  }

  get(id: any): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/getproduct/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/deleteall`);
  }

  findByName(name: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?name=${name}`);
  }
}
