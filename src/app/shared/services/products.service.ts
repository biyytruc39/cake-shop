import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private REST_API_SERVER = 'https://5efb452080d8170016f762d5.mockapi.io/api/v1';
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get<any>(`${this.REST_API_SERVER}/products`);
  }
}
