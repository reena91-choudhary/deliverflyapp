import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pigeon } from '../model/pigeon';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PigeonService {

  private pigeonsUrl: string;

  constructor(private http: HttpClient) {
    this.pigeonsUrl = 'http://localhost:8080/availablePigeons';
  }

  public findAll(): Observable<Pigeon[]> {
    return this.http.get<Pigeon[]>(this.pigeonsUrl);
  }

 }