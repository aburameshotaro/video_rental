import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {shareReplay } from 'rxjs/operators';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://34.227.10.148:5000"
  constructor(private http:HttpClient) { }

  addUser(val:any){
    return this.http.post(this.APIUrl + '/users', val)
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl + '/users', val)
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl + '/users/' + val);
  }

  addRental(val:any){
    return this.http.post(this.APIUrl+ "/rentals", val)
  }

  returnFilm(val:any){
    return this.http.get(this.APIUrl+"/rental/return_film/" + val)
  }

  addFilm(val:any){
    return this.http.post(this.APIUrl + '/films', val)
  }

  updateFilm(val:any){
    return this.http.put(this.APIUrl + '/films', val)
  }

  deleteFilm(val:any){
    return this.http.delete(this.APIUrl+"/films/" + val)
  } 
}
