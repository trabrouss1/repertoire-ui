import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlBuilder } from '../../constants/api-url.builder';

@Injectable({
  providedIn: 'root',
})
export class MasterService {

  private readonly http = inject(HttpClient);

  /* ======================
  * GET
  * ====================== */
  get<T>(
    controller: string,
    method?: string,
    params?: HttpParams
  ): Observable<T> {
    return this.http.get<T>(
      ApiUrlBuilder.build(controller, method),
      { params }
    );
  }

  /* ======================
  * POST
  * ====================== */
  create<T>(
    controller: string,
    method: string,
    body: any
  ): Observable<T> {
    return this.http.post<T>(
      ApiUrlBuilder.build(controller, method),
      body
    );
  }

  /* ======================
  * PUT
  * ====================== */
  update<T>(
    controller: string,
    method: string,
    id: string | number,
    body: any
  ): Observable<T> {
    return this.http.put<T>(
      ApiUrlBuilder.build(controller, method, [id]),
      body
    );
  }

  /* ======================
  * DELETE
  * ====================== */
  delete<T>(
    controller: string,
    method: string,
    id: string | number,
  ): Observable<T> {
    return this.http.delete<T>(
      ApiUrlBuilder.build(controller, method, [id]),
    );
  }

  

}
