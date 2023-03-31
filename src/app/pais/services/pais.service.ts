import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  bsucarPais(termino:string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
    /**  Podemos manejar también de está forma los errores
       .pipe(
              catchError(err => of([]))
            ); **/
            
  }

}
