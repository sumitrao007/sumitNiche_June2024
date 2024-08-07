import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="http://localhost:8080/api/student";


  constructor(private http:HttpClient) { }

  getAllRecord(){
    return (this.http.get(this.baseUrl));
  }

  PostData(obj:any){
    return (this.http.post(this.baseUrl,obj));
  }

  updateData(obj:any){

      return (this.http.put(`${this.baseUrl}/${obj.id}`,obj));

  }

  deleteData(id:any){
     return (this.http.delete(`${this.baseUrl}/${id}`));
  }

}