import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { Perrito } from '../interfaces/perrito';

const baseUrl = 'http://localhost:3000/perritos';

@Injectable({
    providedIn: 'root'
})
export class PerritoService {

    constructor(private http : HttpClient) { }

    private handleError<T> (operation = 'operation', result? : T) {
        return (error : Perrito) : Observable <T> => {
            console.error("ERR: " , error)
            return of(result as T)
        }
    }

    sr_grabarPerrito(perrito: Perrito): Observable<Perrito> {
        return this.http.post<Perrito>(baseUrl, perrito);
    }

    sr_detallePerrito(id: number): Observable<Perrito> {
        return this.http.get<Perrito>(`${baseUrl}/${id}`);
    }

    sr_actualizarPerrito(id: number, perrito: Perrito): Observable<Perrito> {
        return this.http.put<Perrito>(`${baseUrl}/${id}`, perrito);
    }

    sr_eliminarPerrito(id: number): Observable<Perrito> {
        return this.http.delete<Perrito>(`${baseUrl}/${id}`);
    }

    sr_listarPerritos(): Observable<Perrito[]> {
        return this.http.get<Perrito[]>(baseUrl)
        .pipe(
            tap(r => console.log('Recorriendo Perritos.')),
            catchError(this.handleError('ERR GET LISTAR', []))
        )
    }
}
