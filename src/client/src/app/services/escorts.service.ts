import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx";
import { Modelos } from '../Modelos';
@Injectable()
export class EscortsService {
  domain: string = "http://localhost:3000";
  // domain: string = 'www.mydomainapi.com/';

  constructor(private http: HttpClient) { }
  getEscorts(){
    return this.http.get<Modelos[]>(`${this.domain}/api/escorts`)
    .map(res => res);
  }
  addEscorts(newEscort: Modelos){
     return this.http.post<Modelos>(`${this.domain}/api/escorts`, newEscort)
     .map(res => res);
  }
  updateEscorts(newEscort){
    return this.http.put<Modelos>(`${this.domain}/api/escorts/${newEscort._id}`, newEscort)
     .map(res => res)
  }
  deleteEscorts(id){
    return this.http.delete<Modelos>(`${this.domain}/api/escorts/${id}`)
      .map(res => res);
  }
}
