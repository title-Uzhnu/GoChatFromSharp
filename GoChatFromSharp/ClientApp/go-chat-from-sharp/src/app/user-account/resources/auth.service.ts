import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../models/IUser';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl: string = "https://localhost:4200/api/user/";
  public token: string = "";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public registerRequest(userCredentials: IUser): Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl + 'register', JSON.stringify(userCredentials), this.httpOptions);
  }

  public logInRequest(userCredentials: IUser): Observable<string>{
    return this.http.post<string>(this.baseUrl + 'login', JSON.stringify(userCredentials), this.httpOptions)
      .pipe(
        tap(token => {
          this.token = token;
        })
      );
  }

}
